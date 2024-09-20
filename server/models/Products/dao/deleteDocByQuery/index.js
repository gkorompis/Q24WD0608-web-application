var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ProductsModel from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
const functionName = "deleteDoc";
const modelName = "ProductsModels";
export const Unit = (_a) => __awaiter(void 0, [_a], void 0, function* ({ query }) {
    try {
        const connection = yield connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        console.log(">>>>query to delete", query);
        const response = yield ProductsModel.deleteOne(query);
        console.log(">>>response", response);
        return response;
    }
    catch (error) {
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
});
