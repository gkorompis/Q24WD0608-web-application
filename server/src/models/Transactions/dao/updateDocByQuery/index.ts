
import { connectToDb } from "../../../../db/index.js";
import Transactions from "../../schema/index.js";
import { TransactionsDocumentQuery, IndexParameter } from "../../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../../utils/global.js";

const functionName = "udpateDoc"
const modelName = "Transactions"

export const Unit =async({query, query2, update, isNotSet}:IndexParameter<TransactionsDocumentQuery>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);

        const conditionalQuery = {
            $and: [
                query || {store: CLIENT_UNIQUE},
                query2 || {store: CLIENT_UNIQUE}
            ]
        };
        console.log(">>>conditionQuery", conditionalQuery)
        console.log(">>>query", query);
        console.log(">>>query2", query2);

    
        const setUpdate = {$set: update} || {};
        const commandUpdate = isNotSet ? update : setUpdate;
        console.log('>>>commandUpdate', commandUpdate)
        const response = await Transactions.updateOne(conditionalQuery, commandUpdate );
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

