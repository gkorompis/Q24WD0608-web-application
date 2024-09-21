import ResetPass from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { ResetPassQuery, IndexParameter } from "../../../../utils/types.js";

const functionName = "findDoc"
const modelName = "ResetPass"

export const Unit =async({query}:IndexParameter<ResetPassQuery>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);
        
        const response = await ResetPass.find(query as ResetPassQuery).exec();
        console.log(">>>response", response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

