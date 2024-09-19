import express from 'express';
import { TransactionController } from '../../controllers/index.js';


const app = express();
app.use(express.json());

const transactionRoute = express.Router();

const {
    postController
} = TransactionController;

transactionRoute.post(
    '/',
    [],
    postController
)

export default transactionRoute;