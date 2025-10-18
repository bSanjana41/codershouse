import  jwt  from "jsonwebtoken";
import RefreshModel from "../models/refresh-module.js";
class TokenService {
generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1y'});
    return {accessToken, refreshToken};
        
    }

    async storeRefreshToken(token,userId){
        try {
           await RefreshModel.create({
                token,
                userId
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new TokenService();