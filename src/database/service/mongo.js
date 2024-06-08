import mongoose from "mongoose";

// mongoDB connection create here
export async function dbConnect() {
    try {
        const conn = await mongoose.connect(String(process.env.MONGO_CONNECTION_STRING));
        return conn;
    } catch (error) {
        console.log(error);
    }
}