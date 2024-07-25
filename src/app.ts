import express from "express";
import config from 'config';
import connectMongoDb from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";

const port=config.get<number>('port');
const app=express();

app.use(express.json());

app.listen(port, async()=>{
    log.info(`App is running at port http://localhost:${port}`);
    await connectMongoDb();
    routes(app);
});