
import { Request, Response, NextFunction } from "express";
import { findDocByQuery } from "../../models/Transactions/dao/index.js";

    
const Unit = async  (req: Request, res: Response, next: NextFunction) =>{
    const body = req && req.body;
    const params = req && req.params;

    const fetchedJob = await findDocByQuery({query: params, query2: params});

    const transactions = fetchedJob && fetchedJob[0];
    const pulledActionItems = transactions && transactions.items as any || [];
    const reqActionItem = body && body.items || [];

    // const pulledAttachments = transactions && transactions.attachments as any || [];
    // const reqAttachments = body && body.attachments || [];

    const mergedActionItem = [...pulledActionItems, reqActionItem].flat(Infinity);
    // const mergedAttachments = [...pulledAttachments, reqAttachments].flat(Infinity);

    req.body = {
        actionItems: mergedActionItem, 
        // attachments: mergedAttachments
    };
    next();
};

export default Unit;

