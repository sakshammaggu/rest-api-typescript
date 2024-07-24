import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from '../models/user.model';

export async function createUser(input:DocumentDefinition<UserDocument>) {
    try {
        return await UserModel.create();
    } catch (e: any) {
        throw new Error(e);
    }
}