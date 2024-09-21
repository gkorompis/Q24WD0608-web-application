var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcryptjs';
import { findDocByQuery } from '../../models/Users/dao/index.js';
const Unit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get body
        const { body } = req;
        if (!body) {
            return res.status(400).json({ message: "Bad request at request body!" });
        }
        ;
        // check whether username exist
        const { username, password } = body;
        const query = { username };
        const fetchedUser = yield findDocByQuery({ query });
        if (!fetchedUser || !fetchedUser[0]) {
            console.log(">>> invalid login info at authenticateLogin mwares", typeof fetchedUser);
            return res.status(401).json({ message: "Invalid login info!" });
        }
        //check whether password == password
        const passLogin = password;
        const passHashed = fetchedUser[0].password;
        const isMatched = yield bcrypt.compare(passLogin, passHashed);
        console.log(">>>isMatched", isMatched);
        if (!isMatched) {
            return res.status(401).json({ message: "Invalid login info!" });
        }
        //manipulate body
        const { role, store } = fetchedUser[0];
        const userProfile = { username, role, store };
        req.body = userProfile;
        //return response
        next();
    }
    catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
export default Unit;
