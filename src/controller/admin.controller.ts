import {Request, Response} from 'express';
import { CreateAdminInput } from '../schema/admin.schema';
import log from '../utils/logger';
import { createAdmin } from '../service/admin.service';

export async function createAdminHandler(
    req: Request<{}, {}, CreateAdminInput['body']>,
    res: Response
) {
    try {
        const admin = await createAdmin(req.body);
        return res.send(admin); 
    } catch (e: any) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}