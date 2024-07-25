import  mongoose  from "mongoose";

export interface AdminInput {
    
}

export interface AdminDocument extends AdminInput, mongoose.Document {
    
}

const adminSchema=new mongoose.Schema({

});

const AdminModel=mongoose.model<AdminDocument>("Admin", adminSchema);
export default AdminModel;