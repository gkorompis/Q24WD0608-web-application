import Transactions from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { IndexParameter, TransactionsDocumentQuery } from "../../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../../utils/global.js";

const functionName = "findDoc"
const modelName = "Transactions"


export const Unit =async({query, query2}:IndexParameter<TransactionsDocumentQuery>)=>{
    try {
        console.log(">>> global env:", {CLIENT_UNIQUE})
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        

        console.log("conditionalQuery query:", query);
        console.log("conditionalQuery quer2:", query2);
        const conditionalQuery = {
            $and: [
                query || {store: CLIENT_UNIQUE},
                query2 || {store: CLIENT_UNIQUE}
            ]
        }
        
        const response = await Transactions.find(conditionalQuery as TransactionsDocumentQuery).exec();
        console.log(">>>response", typeof response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

