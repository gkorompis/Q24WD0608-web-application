import express from 'express';
import { TransactionController } from '../../controllers/index.js';


const app = express();
app.use(express.json());

const transactionRoute = express.Router();

const {
    postController,
    getController,
    updateController
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



export default transactionRoute;