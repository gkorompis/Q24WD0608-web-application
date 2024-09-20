import mongoose from "mongoose";
import { UsersDocument } from "../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../utils/global.js";


const UsersDocumentSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    username: {type:String, required: true},
    role: {type:String, enum: ["admin", "client"], default: "client"},
    password: {type:String, required: true},
    createdDate: {type:Date, required: true, default: Date.now},
    // info acquired during login from user profile
    store: {type:String, required: true, default: CLIENT_UNIQUE},
    status: {type:String, default: "active",  enum: ["active", "paused", "deleted"]}
})

// const UsersDocumentSchema = new mongoose.Schema({
//     username: {type:String, required: true},
//     username: {type:String, required: true},


//     orderId: {type:String, required: true},
//     transactionId: {type:String, required: true},
//     transactionStatus: {type:String, default:"pending", required: true},
//     createdDate: {type:Date, required: true, default: Date.now},
//     paymentDate: {type:Date},
//     totalPrice: {type:Number, required: true},
//     currency: {type:String, required: true},

//     // info acquired during login session info
//     createdBy: {type:String, required: true},
//     store: {type:String, required: true},

//     //@ts-ignore
//     role: {type:Array, default: function(){return ["super", this.createdBy]}},
// })

const Users = mongoose.model<UsersDocument>('Users', UsersDocumentSchema);
export default Users;