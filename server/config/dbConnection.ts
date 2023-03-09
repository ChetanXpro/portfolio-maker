import { set, connect } from "mongoose";



const connectDB = async () => {
    try {
        set('strictQuery', false)
        await connect(process.env.DATABASE_URI || '').then(() => console.log("Database connected"))
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
