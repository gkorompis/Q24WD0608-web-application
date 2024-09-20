import mongoose from "mongoose";
import { TransactionsDocument } from "../../../utils/types.js";
import { CLIENT_UNIQUE } from "../../../utils/global.js";

// const ItemsTransactionSchema = new mongoose.Schema({
//     itemId: { type: mongoose.Schema.Types.Mixed, required: true },
//     item: { type: String, required: true },
//     quantity: { type: Number, required: true },
//     unitPrice: { type: Number, required: true },
//     totalUnitPrice: { type: Number, required: true },
//     currency: { type: String, required: true }
// });

const ItemsTransactionSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.Mixed, required: true },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalUnitPrice: { 
        type: Number,
        default: function() {
            //@ts-ignore
            return this.quantity * this.unitPrice; // Calculate totalUnitPrice as default
        } 
    },
    currency: { type: String, required: true }
});

// Middleware to calculate totalUnitPrice before saving
// ItemsTransactionSchema.pre('save', function(next) {
//     // If either quantity or unitPrice is modified, recalculate totalUnitPrice
//     if (this.isModified('quantity') || this.isModified('unitPrice')) {
//         this.totalUnitPrice = this.quantity * this.unitPrice;
//     }
//     next();
// });

// const ItemsTransactionSchema = new mongoose.Schema({
//     item: { type: String, required: true },
//     quantity: { type: Number, required: true },
//     unitPrice: { type: Number, required: true },
//     totalUnitPrice: { 
//         type: Number,
//         default: function() {
//             return this.quantity * this.unitPrice; // Calculate totalUnitPrice as default
//         } 
//     },
//     currency: { type: String, required: true }
// });


const TransactionsDocumentSchema = new mongoose.Schema({
    orderId: {type:String, required: true},
    transactionId: {type:String, required: true},
    transactionStatus: {type:String, default:"pending", required: true},
    createdDate: {type:Date, required: true, default: Date.now},
    paymentDate: {type:Date},
    items: {type: [ItemsTransactionSchema], default: [] },
    totalPrice: {type:Number, required: true},
    currency: {type:String, required: true},

    // info acquired during login session info
    createdBy: {type:String, required: true},
    store: {type:String, required: true, default: CLIENT_UNIQUE},

    //@ts-ignore
    role: {type:String, enum: ["admin", "client"], default: "client"},
})

TransactionsDocumentSchema.pre('save', function(next) {
    // Sum all totalUnitPrice fields from the items array
    this.totalPrice = this.items.reduce((sum, item) => {
        return sum + item.totalUnitPrice;
    }, 0);

    next();
});

const Transactions = mongoose.model<TransactionsDocument>('Transactions', TransactionsDocumentSchema);
export default Transactions;