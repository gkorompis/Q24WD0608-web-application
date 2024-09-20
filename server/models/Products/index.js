import { createDoc, findDocByQuery, updateDocByQuery, deleteDocByQuery } from "./dao/index.js";
const ProductsModel = {
    createDoc,
    findDocByQuery,
    updateDocByQuery,
    deleteDocByQuery
};
export default ProductsModel;
