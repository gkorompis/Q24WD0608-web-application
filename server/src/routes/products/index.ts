import express from 'express';
import { ProductsController } from '../../controllers/index.js';
import { productsDeleteMiddlewares, productsGetMiddlewares, productsPostMiddlewares, productsPutMiddlewares } from './middleware.js';


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
    productsPostMiddlewares,
    postController
)

productsRoute.get(
    '/',
    productsGetMiddlewares,
    getController
)

productsRoute.put(
    '/',
    productsPutMiddlewares,
    updateController
)

productsRoute.delete(
    '/one/:productId',
    productsDeleteMiddlewares,
    deleteController
)


export default productsRoute;