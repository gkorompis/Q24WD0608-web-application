import { setXRequestIdHeader } from "../../middlewares/index.js";
export const logoutPostMiddlewares = [
    setXRequestIdHeader
];
