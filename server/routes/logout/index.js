import express from "express";
// import { LogoutController } from ""
import { logoutPostMiddlewares } from "./middleware.js";
import { LogoutController } from "../../controllers/index.js";
const app = express();
app.use(express.json());
const logoutRoute = express.Router();
const { logoutPostController } = LogoutController;
// routes
logoutRoute.post("/", logoutPostMiddlewares, logoutPostController);
export default logoutRoute;
