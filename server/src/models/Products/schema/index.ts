import mongoose from "mongoose";
import { ProductsDocument } from "../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../utils/global.js";



const ProductsDocumentSchema = new mongoose.Schema({
    productId: {type:String, required: true},
    product: {type:String, required: true},
    status: {type:String, enum:["available", "hidden", "not-available", "deleted"], required: true, default: "available"},
    image: {type:String, required: true, default: "https://image.png"},

    // info acquired during login session info
    createdDate: {type:Date, required: true, default: Date.now},
    store: {type:String, required: true, default: CLIENT_UNIQUE},
    group: {type:String, enum:["custom-blend-beans", "specialty-beans", "ready-to-drink", "manual-brew", "gift-set"], required: true, default:"gift-set"},

    //@ts-ignore
    // role: {type:String, enum: ["admin", "client"], default: "client"},
})


const Products = mongoose.model<ProductsDocument>('Products', ProductsDocumentSchema);
export default Products;