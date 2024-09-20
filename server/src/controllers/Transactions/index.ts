import { default as postController } from './postController/index.js'
import { default as getController } from './getController/index.js'
import { default as updateController } from './updateController/index.js'

const controller = {
    postController,
    getController,
    updateController
}

export default controller;