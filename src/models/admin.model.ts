import bcrypt from 'bcrypt';
import  mongoose  from "mongoose";
import config from 'config';

export interface AdminInput {
    adminId: string;
    name: string
    password: string;
    email: string;
    adminToken: string;
}

export interface AdminDocument extends AdminInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(adminPassword: string): Promise<boolean>
    compareAdminToken(adminToken: string): Promise<boolean> 
}

const adminSchema=new mongoose.Schema({
    adminId: {
        type: String, 
        required: true, 
        unique: true
    },
    name: {
        type: String, 
        required: true,
    },
    password: {
        type: String,
        reaquired: true,
    },
    email: {
        type: String, 
        required: true, 
    },
    adminToken: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

adminSchema.pre("save", async function (next) {
    let admin=this as AdminDocument;
    if (!admin.isModified("password") && !admin.isModified("adminToken")) {
        return next();
    }
    const salt=await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
    const hashPassword=await bcrypt.hash(admin.password, salt);
    admin.password=hashPassword;
    const hashAdminToken=await bcrypt.hash(admin.adminToken, salt);
    admin.adminToken=hashAdminToken;
    next();
});

adminSchema.methods.comparePassword=async function(
    adminPassword: string
):Promise<boolean> {
    const admin = this as AdminDocument;
    return bcrypt.compare(adminPassword, admin.password).catch((e) => false);
}

adminSchema.methods.compareAdminToken=async function(
    adminToken: string
):Promise<boolean> {
    const admin = this as AdminDocument;
    return bcrypt.compare(adminToken, admin.adminToken).catch((e) => false);
}

const AdminModel=mongoose.model<AdminDocument>("Admin", adminSchema);
export default AdminModel;