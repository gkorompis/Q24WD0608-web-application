import express from "express";
import { loginPostMiddlewares, refreshPostMiddlewares } from "./middleware.js";
import { LoginController } from "../../controllers/index.js";
export const app = express();
app.use(express.json());
const loginRoute = express.Router();
const { loginPostController, refreshPostController } = LoginController;
// routes
loginRoute.post("/auth", loginPostMiddlewares, loginPostController);
loginRoute.post("/refresh", refreshPostMiddlewares, refreshPostController);
export default loginRoute;
