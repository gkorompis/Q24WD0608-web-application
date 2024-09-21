import {
    restrictRegistration,
    hashPassword,
    permitRole,
    authenticateToken,
    setXRequestIdHeader,
    protectField
} from  "../../middlewares/index.js";


export const usersPostMiddlewares = [
    setXRequestIdHeader,
    restrictRegistration,
    hashPassword
]
export const usersGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client'], 'users'), //<<-- endpoint as input signify the necessity to restrict self
]
export const usersGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client'], 'users'),
]
export const usersPutMiddlewares = [
    setXRequestIdHeader,
    restrictRegistration,
    authenticateToken,
    permitRole(['admin', 'client'], 'users'),
    protectField([
        '_id',
        'role',
        'store'
    ])
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

