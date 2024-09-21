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
        // get refreshToken
        console.log(">>>refresh token");
        const { sessionRefreshToken, sessionRole, sessionUsername } = req.cookies;
        console.log(">>>refreshToken", { sessionRefreshToken, sessionRole, sessionUsername });
        if (!sessionUsername || !sessionRefreshToken || !sessionRole)
            return res.status(400).json({ message: "Bad request at refreshPostController" });
        jwt.sign(sessionRefreshToken, SECRET_REFRESH_KEY, (err, decoded) => {
            console.log(">>>err", err);
            console.log(">>>decoded", decoded);
            if (err)
                return res.status(401).json({ message: "Invalid refresh token!" });
            const loginInfo = { username: sessionUsername, role: sessionRole };
            const newToken = jwt.sign(loginInfo, SECRET_KEY, { expiresIn: '30m' });
            const newRefreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY, { expiresIn: '45m' });
            res.cookie("sessionToken", newToken);
            res.cookie("sessionRefreshToken", newRefreshToken);
            res.cookie('sessionRole', sessionRole);
            res.cookie('sessionUsername', sessionUsername);
            const tokens = {
                token: newToken,
                refreshToken: newRefreshToken
            };
            return res.status(200).json(tokens);
        });
    }
    catch (error) {
        console.log(">>> error at refreshPostController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        return res.status(500).json({ message });
    }
});
export default Unit;
