import TransactionsModel from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { TransactionsDocumentQuery, IndexParameter } from "../../../../utils/types.js";

const functionName = "deleteDoc"
const modelName = "TransactionsModel"

export const Unit =async({query}:IndexParameter<TransactionsDocumentQuery>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        console.log(">>>>query to delete", query)
        const response = await TransactionsModel.deleteOne(query);
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

