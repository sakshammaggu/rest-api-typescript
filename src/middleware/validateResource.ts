import { Request, Response, NextFunction, query } from "express";
import {AnyZodObject} from 'zod';

const validateResource=(schema:AnyZodObject)=>(req:Request, res:Response, next:NextFunction)=>{
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (e:any) {
        return res.status(400).send(e.errors);
    }
};

export default validateResource;