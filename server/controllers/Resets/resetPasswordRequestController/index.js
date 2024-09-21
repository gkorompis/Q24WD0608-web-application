var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
// import { ResetToken } from "../../../model/index.js";
import { ResetsModel } from "../../../models/index.js";
import { BASE_URL, SECRET_KEY } from "../../../utils/global.js";
// import sendEmail from "../../../utils/nodemailerConfig.js";
// import "../../../loadenv.js";
// const SECRET_KEY = process.env.SECRET_KEY as string;
const PUBLIC_URL = false || BASE_URL;
// const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY as string;
const { createDoc } = ResetsModel;
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //body
        const { body } = req;
        const { username, email } = body;
        console.log(">>>request body", { username, email });
        //check localhost
        const { query } = req;
        const { port } = query;
        const url = port ? `http://localhost:${port}` : PUBLIC_URL;
        //create token
        const requestToken = jwt.sign(body, SECRET_KEY, { expiresIn: '1m' });
        console.log(">>> requestToken", requestToken);
        const document = Object.assign(Object.assign({}, body), { token: requestToken });
        //associate with user and store in database
        const response = yield createDoc({ document });
        console.log(">>> response at resetPassworeRequestController", response);
        //send reset link http://my-app/reset-password/:token
        console.log(">>>sending email");
        // const responseEmail = await sendEmail("grkorompis@gmail.com")
        // console.log(">>>sending email response", responseEmail);
        const resetLink = `${url}/reset/auth/token/${requestToken}`;
        return res.status(200).json({ resetLink });
    }
    catch (error) {
        console.log(">>> error at requestTokenController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        return res.status(500).json({ message });
    }
});
export default Unit;
// rbac: admin can find all user, but member can only find self;
