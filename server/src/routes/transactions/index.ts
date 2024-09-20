import express from 'express';
import { TransactionsController } from '../../controllers/index.js';


const app = express();
app.use(express.json());

const transactionsRoute = express.Router();

const {
    postController,
    getController,
    updateController,
    deleteController
} = TransactionsController;

transactionsRoute.post(
    '/',
    [],
    postController
)

transactionsRoute.get(
    '/',
    [],
    getController
)

transactionsRoute.put(
    '/',
    [],
    updateController
)

transactionsRoute.delete(
    '/one/:orderId',
    [],
    deleteController
)


export default transactionsRoute;