import dotenv from 'dotenv';
dotenv.config();

export default {
    port: "8000",
    dbUrl: process.env.PUBLIC_MONGODB_URL,
}