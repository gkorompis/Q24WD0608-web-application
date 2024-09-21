
import { Request, Response, NextFunction } from "express";


const Unit = (permittedFields:string[]) =>{
    
    const cb = (req: Request, res: Response, next: NextFunction) =>{
        //get body
        let body = req && req.body as any;

        //get array field
        let tempObj = {} as any;
        let tempArr = [] as string[];

        
        permittedFields.map(field=>{
            console.log("permitted fields:", field);
            tempObj[field] = body[field] as string;
            if(tempObj[field]){
                const list = tempObj[field].replace(/\s/g, '').split(",");
                tempArr = [...list];
            };
            body[field] = tempArr;
        });

        req.body = body;
        next();
    };
    return cb;
};

export default Unit;

