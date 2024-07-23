import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connectMongoDb=async ()=>{
    const dbUrl=config.get<string>('dbUrl');
    try {
        await mongoose.connect(dbUrl);
        log.info("Connected to MongoDB");
    } catch (error) {
        log.error("Failed to connect MongoDB");
        process.exit(1);
    }
};

export default connectMongoDb;