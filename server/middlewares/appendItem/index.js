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
    const body = req && req.body;
    const params = req && req.params;
    const fetchedJob = yield findDocByQuery({ query: params, query2: params });
    const transactions = fetchedJob && fetchedJob[0];
    const pulledActionItems = transactions && transactions.items || [];
    const reqActionItem = body && body.items || [];
    // const pulledAttachments = transactions && transactions.attachments as any || [];
    // const reqAttachments = body && body.attachments || [];
    const mergedActionItem = [...pulledActionItems, reqActionItem].flat(Infinity);
    // const mergedAttachments = [...pulledAttachments, reqAttachments].flat(Infinity);
    req.body = {
        actionItems: mergedActionItem,
        // attachments: mergedAttachments
    };
    next();
});
export default Unit;
