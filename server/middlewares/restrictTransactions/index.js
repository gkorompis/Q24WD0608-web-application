var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { findDocByQuery } from "../../models/Transactions/dao/index.js";
const Unit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // fetch username
        const { body } = req;
        if (!body) {
            return res.status(400).json({ message: "Bad request at request body!" });
        }
        ;
        const { orderId, transactionId } = body;
        let query = { orderId };
        console.log("");
        const fetchedTransaction0 = yield findDocByQuery({ query });
        query = { transactionId };
        const fetchedTransaction1 = yield findDocByQuery({ query });
        console.log(">>> fetchTransaction0", fetchedTransaction0);
        if (fetchedTransaction0[0]) {
            console.log(">>> failed restriction new transaction only");
            return res.status(409).json({ message: "Order ID already created" });
        }
        ;
        console.log(">>> fetchTransaction1", fetchedTransaction1);
        if (fetchedTransaction1[0]) {
            console.log(">>> failed restriction new transaction only");
            return res.status(409).json({ message: "Transaction ID already created" });
        }
        ;
        console.log(">>> passed restriction new transaction only");
        next();
    }
    catch (err) {
        console.log(">>> error at middleware", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
export default Unit;
