import mongoose from 'mongoose';
const DbConnect = async () => {
    const Mongo_Url = process.env.MONGO_URL;
    try {
        await mongoose.connect(Mongo_Url)
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Database connection failed");
        console.log(error);
        process.exit(1);
    }
}
export default DbConnect;