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
import { SECRET_KEY, SECRET_REFRESH_KEY } from "../../../utils/global.js";
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get body
        const { body } = req;
        if (!body) {
            res.status(400).json({ message: "Bad request at request body." });
        }
        const loginInfo = body;
        const { username, role, store } = loginInfo;
        // sign body to jwt;
        const token = jwt.sign(loginInfo, SECRET_KEY, { expiresIn: '10m' });
        const refreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY, { expiresIn: '10m' });
        console.log(">>>setting cookies at login controller before", req.cookies);
        res.cookie('sessionToken', token, { sameSite: 'none', secure: true });
        res.cookie('sessionRefreshToken', refreshToken, { sameSite: 'none', secure: true });
        res.cookie('sessionRandom', "random", { sameSite: 'none', secure: true });
        res.cookie('sessionRole', role, { sameSite: 'none', secure: true });
        res.cookie('sessionUsername', username, { sameSite: 'none', secure: true });
        res.cookie('sessionOrganization', store, { sameSite: 'none', secure: true });
        console.log(">>>setting cookies at login controller after", req.cookies);
        const { cookies } = req;
        console.log(">>>cookies at postController", cookies);
        const reqSessionToken = cookies.sessionToken;
        console.log(">>cookies at postController", reqSessionToken);
        // return token
        const tokens = {
            token,
            refreshToken
        };
        return res.status(200).json(tokens);
    }
    catch (error) {
        console.log(">>> error at postController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        return res.status(500).json({ message });
    }
});
export default Unit;
// rbac: admin can find all user, but member can only find self;
