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
const Unit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get passwords from body
        const { body } = req;
        if (!body) {
            console.log(">>> bad request at middleware hashPassword");
            return res.status(400).json({ message: "Bad request at request body" });
        }
        ;
        let { password } = body;
        if (!password) {
            console.log(">>> bad request at middleware hashPassword");
            return res.status(400).json({ message: "Bad request at request body" });
        }
        ;
        //hashed
        const saltRounds = 10;
        password = yield bcrypt.hash(password, saltRounds);
        //return and next
        console.log(">>> returning hashedPasswords");
        req.body = Object.assign(Object.assign({}, body), { password });
        next();
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
export default Unit;
