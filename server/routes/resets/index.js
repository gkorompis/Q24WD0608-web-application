import express from "express";
import { ResetsController } from "../../controllers/index.js";
import { resetPasswordTokenMiddlewares, resetPasswordRequestMiddlewares } from "./middlewares.js";
const app = express();
app.use(express.json());
const resetRoute = express.Router();
const { resetPasswordRequestController, resetPasswordController } = ResetsController;
// routes
resetRoute.post("/auth/request", resetPasswordRequestMiddlewares, resetPasswordRequestController);
resetRoute.post("/auth/token/:token", resetPasswordTokenMiddlewares, resetPasswordController);
export default resetRoute;
