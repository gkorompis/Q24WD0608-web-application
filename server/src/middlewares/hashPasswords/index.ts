import {Request, Response, NextFunction} from 'express'
import bcrypt from 'bcryptjs';
import { UsersDocument } from '../../utils/types.js';

const Unit = async (req:Request, res:Response, next:NextFunction) => {
    try {
        //get passwords from body
        const {body} = req
        if(!body){
            console.log(">>> bad request at middleware hashPassword");
            return res.status(400).json({message:"Bad request at request body"});
        };

        let {password} = body as UsersDocument;
         if(!password){
            console.log(">>> bad request at middleware hashPassword");
            return res.status(400).json({message:"Bad request at request body"});
        };
        
        //hashed
        const saltRounds = 10;
        password = await bcrypt.hash(password, saltRounds);

        //return and next
        console.log(">>> returning hashedPasswords");
        req.body = {...body, password};
        next();
    } catch(error){
        return res.status(500).json(error);
    }

    
};

export default Unit;