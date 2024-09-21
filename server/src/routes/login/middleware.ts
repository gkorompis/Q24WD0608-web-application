import {
    authenticateLogin,
    setXRequestIdHeader,
    loginLimiter
} from  "../../middlewares/index.js";


export const loginPostMiddlewares = [
    setXRequestIdHeader,
    // loginLimiter,
    authenticateLogin,
]

export const refreshPostMiddlewares = [
    setXRequestIdHeader
]

