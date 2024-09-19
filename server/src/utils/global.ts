import dontenv from 'dotenv';
dontenv.config();

export const CLIENT_UNIQUE = process.env.CLIENT_UNIQUE as string;
export const MONGODB_SECRET = process.env.MONGODB_SECRET;
export const SECRET_KEY = process.env.SECRET_KEY;
export const SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY;
export const BASE_URL = process.env.BASE_URL
const LOGIN_SERVER_KEY = process.env.PAYMENT_SERVER_KEY;
export const PAYMENT_SERVER_KEY = LOGIN_SERVER_KEY;
export const PAYMENT_CLIENT_KEY = process.env.PAYMENT_CLIENT_KEY;