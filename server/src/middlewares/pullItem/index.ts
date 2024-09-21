
import { Request, Response, NextFunction } from "express";
    
const Unit = async  (req: Request, res: Response, next: NextFunction) =>{
    const body = req && req.body;
    const actionItems = body && body.actionItems
    const attachment = body && body.attachments;
    const update = {
        $pull: {
            actionItems: {$in: [actionItems]},
            attachments: {$in: [attachment]}
        },
        isNotSet: true
    }
    req.body = update;
    next();
};

export default Unit;

