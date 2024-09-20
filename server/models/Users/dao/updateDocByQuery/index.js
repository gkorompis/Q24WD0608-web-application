var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connectToDb } from "../../../../db/index.js";
import Users from "../../schema/index.js";
import { CLIENT_UNIQUE } from "../../../../utils/global.js";
const functionName = "udpateDoc";
const modelName = "Users";
export const Unit = (_a) => __awaiter(void 0, [_a], void 0, function* ({ query, query2, update, isNotSet }) {
    try {
        const connection = yield connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        const conditionalQuery = {
            $and: [
                query || { store: CLIENT_UNIQUE },
                query2 || { store: CLIENT_UNIQUE }
            ]
        };
        console.log(">>>conditionQuery", conditionalQuery);
        console.log(">>>query", query);
        console.log(">>>query2", query2);
        const setUpdate = { $set: update } || {};
        const commandUpdate = isNotSet ? update : setUpdate;
        console.log('>>>commandUpdate', commandUpdate);
        const response = yield Users.updateOne(conditionalQuery, commandUpdate);
        console.log(">>>response", response);
        return response;
    }
    catch (error) {
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
});
