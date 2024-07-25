import { omit } from "lodash";
import AdminModel, { AdminInput } from "../models/admin.model";

export async function createAdmin(input: AdminInput) {
    try {
        const user=await AdminModel.create(input);
        return omit(user.toJSON());
    } catch (e:any) {
        throw new Error(e);
    }
}