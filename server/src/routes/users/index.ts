import express from 'express';
import { UsersController } from '../../controllers/index.js';


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
    [],
    postController
)

usersRoute.get(
    '/',
    [],
    getController
)

usersRoute.put(
    '/',
    [],
    updateController
)

usersRoute.delete(
    '/one/:username',
    [],
    deleteController
)


export default usersRoute;