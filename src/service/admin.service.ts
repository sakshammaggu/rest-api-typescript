import { omit } from "lodash";
import AdminModel, { AdminInput } from "../models/admin.model";

export async function createAdmin(input: AdminInput) {
    try {
        const admin=await AdminModel.create(input);
        return omit(admin.toJSON(), ["password", "adminToken"]);
    } catch (e:any) {
        throw new Error(e);
    }
}