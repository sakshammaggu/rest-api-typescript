import express from "express";
import config from 'config';
import connectMongoDb from "./utils/connect";

const port=config.get<number>('port');
const app=express();

app.listen(port, async()=>{
    console.log(`App is running at port ${port}`);
    await connectMongoDb();
});