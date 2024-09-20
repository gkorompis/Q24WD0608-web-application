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
import { CLIENT_UNIQUE } from '../../../utils/global.js';
const controllerName = "getController";
//foo
const group = "UsersModel";
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //request parameters
        log(`${controllerName} at ${group}`);
        const params = (req && req.params) || (req && req.query) || {};
        const originalQuery = req.query || {};
        console.log(">>>getcontroller", { originalQuery });
        const headers = req && req.headers;
        let { query2 } = originalQuery, query = __rest(originalQuery, ["query2"]);
        console.log(">>>>query2", { query2 });
        query = {
            $and: [
                Object.assign({}, query),
                Object.assign({}, params),
                { store: CLIENT_UNIQUE }
            ]
        };
        query2 = {
            $and: [
                Object.assign({}, query2),
                Object.assign({}, params),
                { store: CLIENT_UNIQUE }
            ]
        };
        // const combinedQuery = {
        //     $and: [
        //         {
        //             $and: [
        //                 {...query},
        //                 {...params},
        //                 {store: CLIENT_UNIQUE}
        //             ]
        //         },
        //         {
        //             $and: [
        //                 {...query2},
        //                 {...params},
        //                 {store: CLIENT_UNIQUE}
        //             ]
        //         }
        //     ]
        // } as any;
        const response = yield UsersModel.findDocByQuery({ query, query2 });
        // const response = await UsersModel.findDocByQuery(combinedQuery);
        console.log(">>>getcontroller", { query });
        //response
        log(`response ${controllerName} at ${group} for query:`, { query });
        return res.status(200).json(response);
    }
    catch (error) {
        log(`error ${controllerName} at ${group}`, error);
        return res.status(500).json({ message: error });
    }
});
export default Unit;