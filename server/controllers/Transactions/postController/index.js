var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const controllerName = "postController";
const group = "Transactions";
import { TransactionsModel } from "../../../models/index.js";
// import { createTransactionAndGetToken } from '../../../utils/midtransClient.js';
import { log } from '../../../utils/logger.js';
// import { createPaymentLink } from '../../../utils/onlinePayment.js';
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const document = req.body || {};
        //dao
        const response = (yield TransactionsModel.createDoc({ document })) || { default: "" };
        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json({ response });
    }
    catch (error) {
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({ message: error });
    }
});
export default Unit;
