import axios from 'axios';
import { PAYMENT_SERVER_KEY } from './global.js'


export const createPaymentLink = async () =>{
    try{
        const url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
        const data = {
            transaction_details: {
                order_id: 'order-id',
                gross_amount: 10000
            },
            credit_card: {
                secure: true
            }
        };

        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${PAYMENT_SERVER_KEY}`
            }
        };


        const response = await axios.post(url, data, options);
         const responseData = {
            data: response && response.data,
            status: response && response.status,
            headers: response && response.headers
        };

        return responseData;
    } catch (error:any){
        console.log("error at online-payment-utils", {PAYMENT_SERVER_KEY,error})
        return error;
    }
}
