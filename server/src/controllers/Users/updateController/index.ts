import { Request, Response } from 'express';

import { UsersModel } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';
import { CLIENT_UNIQUE, SECRET_KEY, SECRET_REFRESH_KEY } from '../../../utils/global.js';
import jwt from "jsonwebtoken";

const controllerName = "updateController"
//foo
const group = "Users"

const Unit = async (req: Request, res: Response) =>{
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        console.log(">>>params", params, typeof params);
        const headers = req && req.headers;
        const {sessionOrganization, sessionRole} = headers;
        console.log(">>>organization", sessionOrganization);

        const originalQuery = req.query as any || {} as any;
        let {query2, ...query} = originalQuery;
        console.log('>>>originalQuery', originalQuery);
        query = {
            $and: [
                {...query},
                {...params},
                // {organization:{ $in: [sessionOrganization]}}
                {store: CLIENT_UNIQUE}
            ]
        };
        query2 = {
            $and: [
                {...query2},
                {...params},
                // {organization:{ $in: [sessionOrganization]}}
                {store: CLIENT_UNIQUE}
            ]
        }
        
        const body = req.body || {};
        console.log(">>>request body:", body);
        const {isNotSet, ...update} = body;
        //dao
        console.log(">>>updatequery", query.$and);
        console.log(">>>updatequery2", query2.$and);
        console.log(">>>update body", update);
        //foo
        const response = await UsersModel.updateDocByQuery({query, query2, update, isNotSet})

        const {username} = req && req.body;
        
        const {acknowledged} = response;
        console.log(">>>response acknowledged", acknowledged);

        if(acknowledged && username && (sessionRole==="client")){
            console.log("refresh login session");
            const loginInfo = {
                username,
                role: sessionRole,
                store: sessionOrganization
            }
            const token = jwt.sign(loginInfo, SECRET_KEY as string, {expiresIn: '10m'});
            const refreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY as string, {expiresIn: '10m'});

            res.cookie('sessionUsername', username, {sameSite: 'none', secure: true} );
            res.cookie('sessionToken', token, {sameSite: 'none', secure: true});
            res.cookie('sessionRefreshToken', refreshToken, {sameSite: 'none', secure: true});
            res.cookie('sessionRole', sessionRole, {sameSite: 'none', secure: true} );
            res.cookie('sessionOrganization', sessionOrganization, {sameSite: 'none', secure: true} );

            console.log(">>>loggin session is refreshed")
        };

        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    } catch(error){
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({message: error});
    }
};
export default Unit