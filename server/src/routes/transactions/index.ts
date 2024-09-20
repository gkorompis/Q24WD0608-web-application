import express from 'express';
import { TransactionController } from '../../controllers/index.js';


const app = express();
app.use(express.json());

const transactionRoute = express.Router();

const {
    postController,
    getController,
    updateController,
    deleteController
} = TransactionController;

transactionRoute.post(
    '/',
    [],
    postController
)

transactionRoute.get(
    '/',
    [],
    getController
)

transactionRoute.put(
    '/',
    [],
    updateController
)

transactionRoute.delete(
    '/one/:orderId',
    [],
    deleteController
)


export default transactionRoute;