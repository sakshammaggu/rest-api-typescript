import mongoose from "mongoose";
import config from "config";

const connectMongoDb=async ()=>{
    const dbUrl=config.get<string>('dbUrl');
    try {
        mongoose
            .connect(dbUrl)
            .then(()=>{
                console.log("Connected to MongoDB");
            })
    } catch (error) {
        console.log("Failed to connect MongoDB");
        process.exit(1);
    }
};

export default connectMongoDb;