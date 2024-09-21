import TransactionsModel from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { TransactionsDocumentQuery, IndexParameter } from "../../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../../utils/global.js";

const functionName = "deleteDoc"
const modelName = "TransactionsModel"

export const Unit =async({query, query2}:IndexParameter<TransactionsDocumentQuery>)=>{
    try {
        // const connection = await connectToDb();
        // console.log(">>>connecting", typeof connection);
        // console.log(`>>>${functionName} at ${modelName}`);
        // console.log(">>>>query to delete", query)


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
        const response = await TransactionsModel.deleteOne(conditionalQuery as TransactionsDocumentQuery);
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

