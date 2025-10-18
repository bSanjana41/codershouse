// controllers/auth-controller.js
import otpService from "../services/otp-service.js";
import hashService from "../services/hash-service.js";
import userService from "../services/user-service.js";
import tokenService from "../services/token_service.js";
import userDto from "../dto/user-dto.js";

class AuthController {
  // Send OTP
  async sendOTP(req, res) {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: "Phone number is required" });

    try {
      // Generate OTP and hash it
      const otp = await otpService.generateOTP();
      const hashedOtp = await hashService.hashOtp(otp);
      const otpExpires = Date.now() + 2 * 60 * 1000; // 2 minutes

      // Send OTP via SMS
      //   await otpService.sendBySms(phone, otp);

      // Save OTP & expiry in user document
      let user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone, otp: hashedOtp, otpExpires });
      } else {
        user.otp = hashedOtp;
        user.otpExpires = otpExpires;
        await user.save();
      }

      return res.json({ message: "OTP sent successfully", phone, otp });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to send OTP" });
    }
  }

  // Verify OTP
  async verifyOTP(req, res) {
    const { phone, otp } = req.body;
    if (!phone || !otp) return res.status(400).json({ message: "Phone and OTP are required" });

    try {
      const user = await userService.findUser({ phone });
      if (!user) return res.status(400).json({ message: "Invalid phone or OTP" });

      // Check expiry
      if (!user.otp || Date.now() > user.otpExpires) {
        return res.status(400).json({ message: "OTP has expired or not found. Request a new one." });
      }

      // Verify OTP
      const isValid = await hashService.verifyOtp(user.otp, otp);
      if (!isValid) return res.status(400).json({ message: "Invalid phone or OTP" });

      // Activate user & clear OTP fields
      user.activated = true;
      user.otp = undefined;
      user.otpExpires = undefined;
      await user.save();

      // Generate JWT tokens
      const { accessToken, refreshToken } = tokenService.generateToken({
        _id: user._id, activated: true
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });
      await tokenService.storeRefreshToken(refreshToken, user._id)
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      const UserDto = new userDto(user)
      res.json({ accessToken, message: "OTP verified successfully", user: UserDto,auth:true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }
}

export default new AuthController();
