import crypto from 'crypto';
import hashService from './hash-service.js';
import twilio from 'twilio';

const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const smsServiceNumber = process.env.SMS_SERVICE_NUMBER;

const Client = twilio(smsSid, smsAuthToken, {
    lazyLoading: true
});
class OtpService {
    async generateOTP() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    async sendBySms(phone, otp) {
        try {
            await Client.messages.create({
                to: phone,
                from: smsServiceNumber,
                body: `Your Codershouse OTP is ${otp}`
            });

        } catch (error) {
            console.log('Twilio SMS Error:', error);
            throw error;

        }
    }
    async verifyOTP(hashedOtp, data) {
const isValid = await hashService.verifyOtp(hashedOtp, data);
        return isValid;
    }
}

export default new OtpService();

