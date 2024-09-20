import { createDoc, findDocByQuery, updateDocByQuery, deleteDocByQuery } from "./dao/index.js";
const TransactionsModel = {
    createDoc,
    findDocByQuery,
    updateDocByQuery,
    deleteDocByQuery
};
export default TransactionsModel;
