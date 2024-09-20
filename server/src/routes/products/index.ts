import express from 'express';
import { ProductsController } from '../../controllers/index.js';


const app = express();
app.use(express.json());

const productsRoute = express.Router();

const {
    postController,
    getController,
    updateController,
    deleteController
} = ProductsController;

productsRoute.post(
    '/',
    [],
    postController
)

productsRoute.get(
    '/',
    [],
    getController
)

productsRoute.put(
    '/',
    [],
    updateController
)

productsRoute.delete(
    '/one/:productId',
    [],
    deleteController
)


export default productsRoute;