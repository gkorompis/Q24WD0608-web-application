import  midtransClient from 'midtrans-client';
import { PAYMENT_CLIENT_KEY, PAYMENT_SERVER_KEY } from './global.js';
// Create Snap API instance


export const createTransactionAndGetToken = async () => {
    try {
        let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction : false,
                serverKey : PAYMENT_SERVER_KEY,
                clientKey : PAYMENT_CLIENT_KEY
            });

        let parameter = {
            "transaction_details": {
                "order_id": "YOUR-ORDERID-123456",
                "gross_amount": 10000
            },
            "credit_card":{
                "secure" : true
            },
            "customer_details": {
                "first_name": "budi",
                "last_name": "pratama",
                "email": "budi.pra@example.com",
                "phone": "08111222333"
            }
        };

        const transaction = await snap.createTransaction(parameter);
        const transactionToken = transaction && transaction.token || "no token";
        console.log('transactionToken midtrans-client:', transactionToken);
        return transactionToken;
    } catch (error) {
        console.error('Error creating transaction:', error);
        return error;
    }
}