var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { UsersModel } from '../../../models/index.js';
import { log } from '../../../utils/logger.js';
import { CLIENT_UNIQUE, SECRET_KEY, SECRET_REFRESH_KEY } from '../../../utils/global.js';
import jwt from "jsonwebtoken";
const controllerName = "updateController";
//foo
const group = "Users";
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        console.log(">>>params", params, typeof params);
        const headers = req && req.headers;
        const { sessionOrganization, sessionRole } = headers;
        console.log(">>>organization", sessionOrganization);
        const originalQuery = req.query || {};
        let { query2 } = originalQuery, query = __rest(originalQuery, ["query2"]);
        console.log('>>>originalQuery', originalQuery);
        query = {
            $and: [
                Object.assign({}, query),
                Object.assign({}, params),
                // {organization:{ $in: [sessionOrganization]}}
                { store: CLIENT_UNIQUE }
            ]
        };
        query2 = {
            $and: [
                Object.assign({}, query2),
                Object.assign({}, params),
                // {organization:{ $in: [sessionOrganization]}}
                { store: CLIENT_UNIQUE }
            ]
        };
        const body = req.body || {};
        console.log(">>>request body:", body);
        const { isNotSet } = body, update = __rest(body, ["isNotSet"]);
        //dao
        console.log(">>>updatequery", query.$and);
        console.log(">>>updatequery2", query2.$and);
        console.log(">>>update body", update);
        //foo
        const response = yield UsersModel.updateDocByQuery({ query, query2, update, isNotSet });
        const { username } = req && req.body;
        const { acknowledged } = response;
        console.log(">>>response acknowledged", acknowledged);
        if (acknowledged && username && (sessionRole === "client")) {
            console.log("refresh login session");
            const loginInfo = {
                username,
                role: sessionRole,
                store: sessionOrganization
            };
            const token = jwt.sign(loginInfo, SECRET_KEY, { expiresIn: '10m' });
            const refreshToken = jwt.sign(loginInfo, SECRET_REFRESH_KEY, { expiresIn: '10m' });
            res.cookie('sessionUsername', username, { sameSite: 'none', secure: true });
            res.cookie('sessionToken', token, { sameSite: 'none', secure: true });
            res.cookie('sessionRefreshToken', refreshToken, { sameSite: 'none', secure: true });
            res.cookie('sessionRole', sessionRole, { sameSite: 'none', secure: true });
            res.cookie('sessionOrganization', sessionOrganization, { sameSite: 'none', secure: true });
            console.log(">>>loggin session is refreshed");
        }
        ;
        //response
        log(`response ${controllerName} at ${group}`, response);
        return res.status(200).json(response);
    }
    catch (error) {
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({ message: error });
    }
});
export default Unit;
