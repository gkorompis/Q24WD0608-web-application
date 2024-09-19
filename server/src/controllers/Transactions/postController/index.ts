import { Request, Response } from 'express';

const controllerName = "postController"
const group = "Transaction"
// import { RequestComponent } from '../../../models/index.js';
// import { createTransactionAndGetToken } from '../../../utils/midtransClient.js';
import { log } from '../../../utils/logger.js';
// import { createPaymentLink } from '../../../utils/onlinePayment.js';

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const document = req.body || {};
        
        //dao
        // const response = await RequestComponent.createDoc({document})
        // const response = await createPaymentLink();
        const response = {trial: "test"}

        //response

        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json({response});
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit