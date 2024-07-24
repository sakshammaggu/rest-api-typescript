import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res:Response) {
    try {
        const user=await createUser(req.body);  // call create user service
        return user; 
    } catch (e: any) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}