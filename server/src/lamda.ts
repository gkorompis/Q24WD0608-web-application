import {handler} from './index.js'

try {
    //@ts-ignore
    handler();
} catch(err){
    console.log(">>> error at handler", err);
}