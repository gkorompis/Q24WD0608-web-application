import mongoose from 'mongoose';
import dontenv from 'dotenv';
dontenv.config();

const MONGODB_SECRET = process.env.MONGODB_SECRET as string;
// console.log("printing env ###", MONGODB_SECRET)
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'bikinin-client-#0608-dev',
}
export const connectToDb =async() =>{
    try {
        const response = await mongoose.connect(MONGODB_SECRET, config);
        console.log(">>>success connectToDb at db", typeof response);
        return response
    } catch(err){
        console.log(">>>error catched connectToDb at db", err);
    }   
}