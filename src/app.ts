import express from "express";
import config from 'config';

const port=config.get('port');
const app=express();

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
});