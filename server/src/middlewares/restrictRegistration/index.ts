import { Request, Response, NextFunction } from "express";
import { findDocByQuery } from "../../models/Users/dao/index.js";

const Unit = async (req:Request, res:Response, next: NextFunction) =>{
    try {
        // fetch username
        const {body} = req;
        if(!body){return res.status(400).json({message: "Bad request at request body!"})};
        const {username, email} = body;
        let query = {username} as any;
        console.log("")
        const fetchedUser0 = await findDocByQuery({query});
        query = {email};
        const fetchedUser1 = await findDocByQuery({query});

        
        console.log(">>> fetchUser0", fetchedUser0);
        if(fetchedUser0[0]){ 
            console.log(">>> failed restriction new user only");
            return res.status(409).json({message: "Username or email already registered"});
        };
        
        console.log(">>> fetchUser1", fetchedUser1);
        if(fetchedUser1[0]){ 
            console.log(">>> failed restriction new user only");
            return res.status(409).json({message: "Username or email already registered"});
        };

        console.log(">>> passed restriction new user only")
        next();
    } catch(err){
        console.log(">>> error at middleware", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export default Unit;