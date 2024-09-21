import {Request, Response , NextFunction} from 'express';


const Unit = (req:Request, res:Response, next:NextFunction) =>{
    const {body} =  req;
    if(!body){return res.status(400).json({message: "Bad request at request body!"})};
    const header = req && req.headers as any || {} as any
    const {sessionOrganization, sessionUsername, sessionRole} = header as any;
    console.log(">>>header session variable", {sessionOrganization, sessionUsername, sessionRole})
    // const {sessionUsername, sessionRole, sessionOrganization} = req.cookies;
    if(sessionRole!=="superadmin"){
        console.log(">>> restrict create field createdBy, and store")
        // const {createdBy} = req.body;
        req.body = {
            ...body,
            createdBy: sessionUsername,
            store: sessionOrganization
        }
    } else {
        const {createdBy} = req.body;
        req.body = {
            ...body,
            createdBy: createdBy || sessionUsername,
            store: sessionOrganization
        }
    }

    // if(sessionRole=="member"){
    //     console.log(">>> restrict create for role member")
    //     req.body = {
    //         ...req.body,
    //         createdBy: sessionUsername
    //     }
    // };
    console.log(">>> passed at restrict create");
    next()
};

export default Unit;