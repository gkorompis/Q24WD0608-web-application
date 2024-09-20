import { default as postController } from './postController/index.js';
import { default as getController } from './getController/index.js';
import { default as updateController } from './updateController/index.js';
import { default as deleteController } from './deleteController/index.js';
const controller = {
    postController,
    getController,
    updateController,
    deleteController
};
export default controller;
