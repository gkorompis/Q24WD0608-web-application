import { v4 as uuidv4 } from 'uuid';
const Unit = (req, res, next) => {
    const newRequestId = uuidv4();
    res.setHeader('x-request-id', newRequestId);
    console.log(">>> setXRequestId", newRequestId);
    next();
};
export default Unit;
