import Products from "../../schema/index.js";
import { connectToDb } from "../../../../db/index.js";
import { IndexParameter, ProductsDocumentQuery } from "../../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../../utils/global.js";

const functionName = "findDoc"
const modelName = "Products"


export const Unit =async({query, query2}:IndexParameter<ProductsDocumentQuery>)=>{
    try {
        console.log(">>> global env:", {CLIENT_UNIQUE})
        const connection = await connectToDb();
        console.log(">>>connecting", typeof connection);
        console.log(`>>>${functionName} at ${modelName}`);

        const conditionalQuery = {
            $and: [
                query || {store: CLIENT_UNIQUE},
                query2 || {store: CLIENT_UNIQUE}
            ]
        }
        
        const response = await Products.find(conditionalQuery as ProductsDocumentQuery).exec();
        console.log(">>>response", typeof response);
        return response
    } catch(error){
        console.log(`>>>catch error ${functionName} at ${modelName}`, error);
        throw new Error(JSON.stringify(error));
    }
}

