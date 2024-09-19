var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { PAYMENT_SERVER_KEY } from './global.js';
export const createPaymentLink = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        const response = yield axios.post(url, data, options);
        const responseData = {
            data: response && response.data,
            status: response && response.status,
            headers: response && response.headers
        };
        return responseData;
    }
    catch (error) {
        console.log("error at online-payment-utils", { PAYMENT_SERVER_KEY, error });
        return error;
    }
});
