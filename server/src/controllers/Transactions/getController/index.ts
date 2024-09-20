import { Request, Response } from 'express';
import { TransactionsModel } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';
import { CLIENT_UNIQUE } from '../../../utils/global.js';


const controllerName = "getController"
//foo
const group = "TransactionsModel"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        const originalQuery = req.query as any || {} as any;
        console.log(">>>getcontroller", {originalQuery})
        const headers = req && req.headers;
        let {query2, ...query} = originalQuery;
        console.log(">>>>query2", {query2})
        query = {
            $and: [
                {...query},
                {...params},
                {store: CLIENT_UNIQUE}
            ]
        };
        query2 = {
            $and: [
                {...query2},
                {...params},
                {store: CLIENT_UNIQUE}
            ]
        }

        // const combinedQuery = {
        //     $and: [
        //         {
        //             $and: [
        //                 {...query},
        //                 {...params},
        //                 {store: CLIENT_UNIQUE}
        //             ]
        //         },
        //         {
        //             $and: [
        //                 {...query2},
        //                 {...params},
        //                 {store: CLIENT_UNIQUE}
        //             ]
        //         }
        //     ]
        // } as any;
        const response = await TransactionsModel.findDocByQuery({query, query2});
        // const response = await TransactionsModel.findDocByQuery(combinedQuery);
        console.log(">>>getcontroller", {query})
        //response
        log(`response ${controllerName} at ${group} for query:`, {query});
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit