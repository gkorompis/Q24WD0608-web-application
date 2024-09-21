import express from 'express';
import { UsersController } from '../../controllers/index.js';


import { 
    usersPostMiddlewares,
    usersGetMiddlewares,
    usersPutMiddlewares,
    usersDeleteMiddlewares

} from './middleware.js';


const app = express();
app.use(express.json());

const usersRoute = express.Router();

const {
    postController,
    getController,
    updateController,
    deleteController
} = UsersController;

usersRoute.post(
    '/',
    usersPostMiddlewares,
    postController
)

usersRoute.get(
    '/',
    // usersGetMiddlewares,
    usersGetMiddlewares,
    getController
)

usersRoute.put(
    '/',
    // usersPutMiddlewares,
    usersPutMiddlewares,
    updateController
)

usersRoute.delete(
    '/one/:username',
    // usersDeleteMiddlewares,
    usersDeleteMiddlewares,
    deleteController
)


export default usersRoute;