import {
    permitRole,
    authenticateToken,
    restrictCreate,
    setXRequestIdHeader,
    protectField,
    fieldToArray,
    appendItem,
    pullItem,
    restrictTransactions
} from  "../../middlewares/index.js";


export const transactionsPostMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['client'], "transactions"),
    restrictTransactions,
    restrictCreate,
    fieldToArray(["stakeholder"])
]
export const transactionsGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client'], "transactions"),
]
export const transactionsGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client'], "transactions"),
]
export const transactionsPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['client'], "transactions"), // < the endpoint input here is to restrict self crud only
    protectField([
        '_id', 
        'orderId',
        'transactionId',
        'createdBy', 
        'createdDate', 
        'items',
        'role',
        'store'
    ])
]
export const transactionsPutAppendItemMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer', 'client'], "transactions"),
    protectField(['_id', 'createdBy', 'createdAt', 'store']),
    appendItem
]
export const transactionsPutPullItemMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'officer', 'client'], "transactions"),
    protectField(['_id', 'createdBy', 'createdAt', 'store']),
    pullItem
]
export const transactionsDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    // permitRole(['admin'], "job"),
    permitRole(['client'], "transactions"),
]
export const transactionsDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    // permitRole(['admin'], "job"),
    permitRole(['client'], "transactions"),
]

