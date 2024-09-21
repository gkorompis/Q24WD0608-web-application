var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findDocByQuery } from "../../models/Users/dao/index.js";
const Unit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // fetch username
        const { body } = req;
        if (!body) {
            return res.status(400).json({ message: "Bad request at request body!" });
        }
        ;
        const { username, email } = body;
        let query = { username };
        console.log("");
        const fetchedUser0 = yield findDocByQuery({ query });
        query = { email };
        const fetchedUser1 = yield findDocByQuery({ query });
        console.log(">>> fetchUser0", fetchedUser0);
        if (fetchedUser0[0]) {
            console.log(">>> failed restriction new user only");
            return res.status(409).json({ message: "Username or email already registered" });
        }
        ;
        console.log(">>> fetchUser1", fetchedUser1);
        if (fetchedUser1[0]) {
            console.log(">>> failed restriction new user only");
            return res.status(409).json({ message: "Username or email already registered" });
        }
        ;
        console.log(">>> passed restriction new user only");
        next();
    }
    catch (err) {
        console.log(">>> error at middleware", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
export default Unit;
