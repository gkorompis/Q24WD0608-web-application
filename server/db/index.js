var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import dontenv from 'dotenv';
dontenv.config();
const MONGODB_SECRET = process.env.MONGODB_SECRET;
// console.log("printing env ###", MONGODB_SECRET)
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'bikinin-client-#0608-dev',
};
export const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield mongoose.connect(MONGODB_SECRET, config);
        console.log(">>>success connectToDb at db", typeof response);
        return response;
    }
    catch (err) {
        console.log(">>>error catched connectToDb at db", err);
    }
});
