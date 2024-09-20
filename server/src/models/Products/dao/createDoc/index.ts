import Transactions from "../../schema/index.js"
import { connectToDb } from "../../../../db/index.js";
import { IndexParameter, TransactionsDocument } from "../../../../utils/types.js";

const functionName = "createDoc"
const modelName = "Transactions"

export const Unit =async({document}:IndexParameter<TransactionsDocument>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);

        console.log(`>>>${functionName} at ${modelName}`);
        const newDocument = new Transactions(document) as any;
        console.log(">>>response", typeof newDocument);

        return newDocument.save();
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

