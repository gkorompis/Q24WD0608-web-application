import { Request, Response, NextFunction } from "express";

const Unit = (permittedRoles: string[], endpoint?: string) =>{
    const cb = async (req:Request, res:Response, next: NextFunction) =>{
        try {
            // fetch role from cookies
            // const {sessionRole, sessionUsername} = req.cookies;
            const {sessionRole, sessionUsername, sessionOrganization} = req.headers as {sessionRole: string, sessionUsername: string, sessionOrganization: string};
            
            console.log(">>> sessionRole", sessionRole);
            console.log(">>> sessionUsername", sessionUsername);

            if(!sessionRole){return res.status(401).json({message: "Invalid role!"})};

            //check permission
            if(!permittedRoles.includes(sessionRole)){return res.status(403).json({message: "Unauthorized role access!"})};

            //modify default query for role member
            if(sessionRole!=="admin"){
                if(endpoint=="transactions"){
                    const httpMethod = req && req.method;
                    console.log(">>>requestMethod",httpMethod);
                    
                    console.log('>>> modifying default query for members', endpoint)
                    const {query} = req;
                    req.query = {...query, 
                        createdBy: sessionUsername, 
                        store: sessionOrganization,
                        // query2: {stakeholder: {$in: [sessionUsername]}} <<- this one will be useful if there are certain document that can be accessed by multiple clients
                    }
                    
                    console.log(">>>reqQuery", req.query)
                    if(httpMethod=="PUT"){
                        let {query2} = req.query as any;
                        query2 = {$and:[ 
                            {...query2}, 
                            // {permission: {$in: [sessionUsername]}}
                            {transactionStatus: "pending"}
                        ]};
                        req.query = {...req.query, query2};
                        console.log(">>>reqQuery2", req.query)
                    }
                    if(httpMethod=="DELETE"){
                        let {query2} = req.query as any;
                        query2 = {$and:[ 
                            {...query2}, 
                            // {permission: {$in: [sessionUsername]}}
                            {transactionStatus: "pending"}
                        ]};
                        req.query = {...req.query, query2};
                        console.log(">>>reqQuery2", req.query)
                    }
                } else {
                    console.log('>>> only admin store self', endpoint)
                    const {query} = req;
                    req.query = {...query}
                }

                if(endpoint=="products"){
                    const httpMethod = req && req.method;
                    console.log(">>>requestMethod",httpMethod);
                    
                    console.log('>>> modifying default query for members', endpoint)
                    const {query} = req;
                    req.query = {...query, 
                        createdBy: sessionUsername, 
                        store: sessionOrganization,
                        // query2: {stakeholder: {$in: [sessionUsername]}} <<- this one will be useful if there are certain document that can be accessed by multiple clients
                    }
                    
                    console.log(">>>reqQuery", req.query)
                    if(httpMethod=="PUT"){
                        let {query2} = req.query as any;
                        query2 = {$and:[ 
                            {...query2}, 
                            // {permission: {$in: [sessionUsername]}}
                        ]};
                        req.query = {...req.query, query2};
                        console.log(">>>reqQuery2", req.query)
                    }
                    if(httpMethod=="DELETE"){
                        let {query2} = req.query as any;
                        query2 = {$and:[ 
                            {...query2}, 
                            // {permission: {$in: [sessionUsername]}}
                        ]};
                        req.query = {...req.query, query2};
                        console.log(">>>reqQuery2", req.query)
                    }
                } else {
                    console.log('>>> only admin store self', endpoint)
                    const {query} = req;
                    req.query = {...query}
                }
            }
            
            console.log(">>> passed role permission", sessionRole, req.query);
            next();
        } catch(err){
            console.log(">>> error at middleware", err);
            return res.status(500).json({message: "Bad request at request body!"});
        }
    };
    return cb;
}
export default Unit;