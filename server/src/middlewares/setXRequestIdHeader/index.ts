import {v4 as uuidv4} from 'uuid';
import {Request, Response, NextFunction} from "express";

const Unit = (req:Request, res: Response, next:NextFunction) =>{

    const newRequestId = uuidv4();
    res.setHeader('x-request-id', newRequestId);
    console.log(">>> setXRequestId", newRequestId);
    next();
};

export default Unit;
