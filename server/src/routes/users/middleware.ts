import {
    restrictRegistration,
    hashPassword,
    permitRole,
    authenticateToken,
    setXRequestIdHeader
} from  "../../middlewares/index.js";


export const usersPostMiddlewares = [
    setXRequestIdHeader,
    restrictRegistration,
    hashPassword
]
export const usersGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member']),
]
export const usersGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'member']),
]
export const usersPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer', 'member']),
]
export const usersDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin']),
]
export const usersDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin']),
]

