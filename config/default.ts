import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PUBLIC_SERVER_PORT,
    dbUrl: process.env.PUBLIC_MONGODB_URL,
    saltWorkFactor:  parseInt(process.env.PUBLIC_SALT_WORK_FACTOR || '10', 10),
}