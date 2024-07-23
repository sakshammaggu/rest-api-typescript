import express from "express";
import config from 'config';
import connectMongoDb from "./utils/connect";
import log from "./utils/logger";

const port=config.get<number>('port');
const app=express();

app.listen(port, async()=>{
    log.info(`App is running at port https://localhost:${port}`);
    await connectMongoDb();
});