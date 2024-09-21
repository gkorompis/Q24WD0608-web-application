import mongoose from "mongoose";
const resetPassSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    token: { type: String, required: true }
});
const ResetPass = mongoose.model('ResetPass', resetPassSchema);
export default ResetPass;
