import { permitRole, authenticateToken, restrictCreate, setXRequestIdHeader, protectField, fieldToArray, restrictProducts } from "../../middlewares/index.js";
export const productsPostMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin'], "products"), // only admin can create products
    restrictProducts,
    restrictCreate,
    fieldToArray(["stakeholder"])
];
export const productsGetMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client']), //only admin and client can get products, no need restricted self
];
export const productsGetOneMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin', 'client']), //only admin and client can get products, no need restricted self
];
export const productsPutMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    permitRole(['admin']), //only admin can update products, no need restricted self
    protectField([
        '_id',
        'productId',
        'store'
    ])
];
export const productsDeleteMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    // permitRole(['admin'], "job"),
    permitRole(['admin'], "products"),
];
export const productsDeleteManyMiddlewares = [
    setXRequestIdHeader,
    authenticateToken,
    // permitRole(['admin'], "job"),
    permitRole(['client'], "products"),
];
