var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Unit = (protectedField, endpoint) => {
    const cb = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const body = req && req.body;
            protectedField.map(field => delete body[field]);
            next();
        }
        catch (err) {
            console.log(">>> error at middleware", err);
            return res.status(500).json({ message: "Bad request at request body!" });
        }
    });
    return cb;
};
export default Unit;
