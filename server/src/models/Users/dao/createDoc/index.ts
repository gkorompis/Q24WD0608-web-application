import Users from "../../schema/index.js"
import { connectToDb } from "../../../../db/index.js";
import { IndexParameter, UsersDocument } from "../../../../utils/types.js";

const functionName = "createDoc"
const modelName = "Users"

export const Unit =async({document}:IndexParameter<UsersDocument>)=>{
    try {
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);

        console.log(`>>>${functionName} at ${modelName}`);
        const newDocument = new Users(document) as any;
        console.log(">>>response", typeof newDocument);

        return newDocument.save();
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

