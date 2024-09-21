var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../utils/global.js';
const Unit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //get token from cookies
    const { sessionToken } = yield req.cookies;
    console.log(">>>request cookies at authenticateToken mw", req.cookies);
    let token = sessionToken;
    if (!sessionToken) {
        //get token from headers
        const { headers } = req;
        const { authorization } = headers;
        console.log(">>>mw Authorization header::", { authorization });
        if (!authorization) {
            return res.status(401).json({ message: "Invalid request! Login session is expired" });
        }
        ;
        token = authorization.split(" ")[1];
        console.log(">>>mw fetchToken:", { token });
        if (!token) {
            return res.status(401).json({ message: "Invalid token!" });
        }
        ;
    }
    ;
    //verifytoken
    jwt.verify(token, SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log(">>> error at authenticateToken mw", { err });
            return res.status(401).json({ message: "Invalid token!!" });
        }
        ;
        console.log(">>> decoded", decoded);
        const { username, role, store } = decoded;
        console.log(">>> setting cookies");
        res.cookie("sessionUsername", username);
        res.cookie("sessionRole", role);
        res.cookie("sessionOrganization", store);
        const { headers } = req;
        req.headers = Object.assign(Object.assign({}, headers), { sessionUsername: username, sessionRole: role, sessionOrganization: store });
        next();
    }));
});
export default Unit;
