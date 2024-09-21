import { Request, Response, NextFunction } from "express";
import { findDocByQuery } from "../../models/Products/dao/index.js";

const Unit = async (req:Request, res:Response, next: NextFunction) =>{
    try {
        // fetch username
        const {body} = req;
        if(!body){return res.status(400).json({message: "Bad request at request body!"})};
        const {productId} = body;
        let query = {productId} as any;
        console.log("")
        const fetchedProduct0 = await findDocByQuery({query});
        // query = {transactionId};
        // const fetchedProduct1 = await findDocByQuery({query});

        
        console.log(">>> fetchProduct0", fetchedProduct0);
        if(fetchedProduct0[0]){ 
            console.log(">>> failed restriction new transaction only");
            return res.status(409).json({message: "Product ID already created"});
        };
        
        // console.log(">>> fetchProduct1", fetchedProduct1);
        // if(fetchedProduct1[0]){ 
        //     console.log(">>> failed restriction new transaction only");
        //     return res.status(409).json({message: "Product ID already created"});
        // };

        console.log(">>> passed restriction new transaction only")
        next();
    } catch(err){
        console.log(">>> error at middleware", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export default Unit;