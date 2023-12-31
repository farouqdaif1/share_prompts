import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('=>  database connection');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUndefinedTopology: true,
        })
        isConnected = true;
        console.log('=>  database connection');
    } catch (error) {
        console.log('=>  database connection failed');
        console.log(error);
    }
};