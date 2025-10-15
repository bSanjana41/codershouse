import bcrypt from 'bcrypt';
class HashService {
    async hashOtp(data) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const hash = await bcrypt.hash(String(data), salt);
        return hash;
    }
    async verifyOtp(hashedOtp, data) {
        return await bcrypt.compare(String(data), hashedOtp);
    }

}

export default new HashService();