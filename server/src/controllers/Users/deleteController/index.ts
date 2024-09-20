import { Request, Response } from 'express';

import { UsersModel } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';

const controllerName = "deleteController"
//foo
const group = "Users"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        console.log(">>>params", params, typeof params);
        const headers = req && req.headers;
        const {sessionOrganization} = headers;
        console.log(">>>organization", sessionOrganization);
        
        //foo
        const originalQuery = req.query as any || {} as any;
        let {query2, ...query} = originalQuery;
        console.log('>>>originalQuery', originalQuery);
        query = {
            ...params,
            ...originalQuery
        }
        console.log(">>> controller passed query", query)

        if(!Object.keys(query).length){
            return res.status(400).json({
                message: "order id is not found"
            });
        }
        
        //daoc
        //foo
        const response = await UsersModel.deleteDocByQuery({query})

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit