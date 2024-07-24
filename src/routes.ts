import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
const routes=(app: Express)=>{
    app.get('/healthCheck', (req: Request, res: Response)=>{
        res.status(200).send('OK');
    });

    app.post('/api/users', createUserHandler);
};

export default routes;