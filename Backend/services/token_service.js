import  jwt  from "jsonwebtoken";

class TokenService {
generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1y'});
    return {accessToken, refreshToken};
        
    }
}

export default new TokenService();