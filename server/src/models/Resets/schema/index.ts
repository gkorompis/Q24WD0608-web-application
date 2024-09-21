import mongoose from "mongoose";
import { ResetPassDocument } from "../../../utils/types.js";

const resetPassSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: false},
    token: {type: String, required: true}
});

const ResetPass = mongoose.model<ResetPassDocument>('ResetPass', resetPassSchema);
export default ResetPass;

