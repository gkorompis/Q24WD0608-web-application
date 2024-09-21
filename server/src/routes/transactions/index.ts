import express from 'express';
import { TransactionsController } from '../../controllers/index.js';
import { 
    transactionsDeleteMiddlewares,
    transactionsGetMiddlewares, 
    transactionsPostMiddlewares, 
    transactionsPutMiddlewares
} from './middleware.js';


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
    transactionsPostMiddlewares,
    postController
)

transactionsRoute.get(
    '/',
    transactionsGetMiddlewares,
    getController
)

transactionsRoute.put(
    '/',
    transactionsPutMiddlewares,
    updateController
)

transactionsRoute.delete(
    '/one/:orderId',
    transactionsDeleteMiddlewares,
    deleteController
)


export default transactionsRoute;