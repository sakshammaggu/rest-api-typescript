import { Request, Response, NextFunction, query } from "express";
import {AnyZodObject} from 'zod';

const validateResource=(schema:AnyZodObject)=>(req:Request, res:Response, next:NextFunction)=>{
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next(); // If validation is successful, proceed to the next middleware or route handler
    } catch (e:any) {
        return res.status(400).send(e.errors);  // If validation fails, send a 400 response with the validation errors
    }
};

export default validateResource;