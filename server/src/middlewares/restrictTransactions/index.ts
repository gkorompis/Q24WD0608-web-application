import { Request, Response, NextFunction } from "express";
import { findDocByQuery } from "../../models/Transactions/dao/index.js";

const Unit = async (req:Request, res:Response, next: NextFunction) =>{
    try {
        // fetch username
        const {body} = req;
        if(!body){return res.status(400).json({message: "Bad request at request body!"})};
        const {orderId, transactionId} = body;
        let query = {orderId} as any;
        console.log("")
        const fetchedTransaction0 = await findDocByQuery({query});
        query = {transactionId};
        const fetchedTransaction1 = await findDocByQuery({query});

        
        console.log(">>> fetchTransaction0", fetchedTransaction0);
        if(fetchedTransaction0[0]){ 
            console.log(">>> failed restriction new transaction only");
            return res.status(409).json({message: "Order ID already created"});
        };
        
        console.log(">>> fetchTransaction1", fetchedTransaction1);
        if(fetchedTransaction1[0]){ 
            console.log(">>> failed restriction new transaction only");
            return res.status(409).json({message: "Transaction ID already created"});
        };

        console.log(">>> passed restriction new transaction only")
        next();
    } catch(err){
        console.log(">>> error at middleware", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export default Unit;