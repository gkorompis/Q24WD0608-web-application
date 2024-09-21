import { default as loginPostController } from "./postController/index.js";
import { default as refreshPostController } from "./refreshPostController/index.js";
const loginController = {
    loginPostController,
    refreshPostController
};
export default loginController;
