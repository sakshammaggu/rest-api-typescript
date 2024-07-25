import { object, string, TypeOf } from "zod";

export const createAdminSchema=object({
    body: object({
        adminId: string({
            required_error: "Admin Id is required"
        }),
        name: string({
            required_error: "Admin Name is required"
        }),
        email: string({
            required_error: "Admin Email is required"
        }).email("Invalid Email"),
        password: string({
            required_error: "Password is required"
        }).min(4, "Password too short, need min 4 char"),
        passwordConfirmation: string({
            required_error: "Password is required"
        }),
        adminToken: string({
            required_error: "Admin token is required"
        }).min(4, "Admin Token too short, need min 4 char"),
        adminTokenConfirmation: string({
            required_error: "Admin Token is required"
        })
    }).refine((data)=>data.password===data.passwordConfirmation, {
        message: "Password do not match",
        path: ['passwordConfirmation']
    }).refine((data)=>data.adminToken===data.adminTokenConfirmation, {
        message: "Admin Token do not match",
        path: ['adminTokenConfirmation']
    })
});

export type CreateAdminInput=Omit<TypeOf<typeof createAdminSchema>, "body.passwordConfirmation" | "body.adminTokenConfirmation">;