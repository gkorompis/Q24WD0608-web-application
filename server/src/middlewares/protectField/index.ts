import { Request, Response, NextFunction } from "express";

const Unit = (protectedField: string[], endpoint?: string) =>{
    const cb = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            const body = req && req.body;
            protectedField.map(field => delete body[field]);
            next();
        } catch(err){
            console.log(">>> error at middleware", err);
            return res.status(500).json({message: "Bad request at request body!"});
        }
    };
    return cb;
}
export default Unit;