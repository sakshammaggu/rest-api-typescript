import { Express, Request, Response } from "express";
import validateResource from "./middleware/validateResource";

import { createUserHandler } from "./controller/user.controller";
import { createAdminHandler } from "./controller/admin.controller";

import { createUserSchema } from "./schema/user.schema";
import { createAdminSchema } from "./schema/admin.schema";

const routes=(app: Express)=>{
    app.get('/healthCheck', (req: Request, res: Response)=>{
        res.status(200).send('OK');
    });

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);  // create user rest-api
    app.post('/api/admin', validateResource(createAdminSchema), createAdminHandler) // create admin rest-api
};

export default routes;