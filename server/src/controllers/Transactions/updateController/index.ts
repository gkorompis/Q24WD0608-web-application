import { Request, Response } from 'express';

import { TransactionsModel } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';

const controllerName = "updateController"
//foo
const group = "Transactions"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        console.log(">>>params", params, typeof params);
        const headers = req && req.headers;
        const {sessionOrganization} = headers;
        console.log(">>>organization", sessionOrganization);

        const originalQuery = req.query as any || {} as any;
        let {query2, ...query} = originalQuery;
        console.log('>>>originalQuery', originalQuery);
        query = {
            $and: [
                {...query},
                {...params},
                {organization:{ $in: [sessionOrganization]}}
            ]
        };
        query2 = {
            $and: [
                {...query2},
                {...params},
                {organization:{ $in: [sessionOrganization]}}
            ]
        }
        
        const body = req.body || {};
        console.log(">>>request body:", body);
        const {isNotSet, ...update} = body;
        //dao
        console.log(">>>updatequery", query.$and);
        console.log(">>>updatequery2", query2.$and);
        console.log(">>>update body", update);
        //foo
        const response = await TransactionsModel.updateDocByQuery({query, query2, update, isNotSet})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit