const Unit = (permittedFields) => {
    const cb = (req, res, next) => {
        //get body
        let body = req && req.body;
        //get array field
        let tempObj = {};
        let tempArr = [];
        permittedFields.map(field => {
            console.log("permitted fields:", field);
            tempObj[field] = body[field];
            if (tempObj[field]) {
                const list = tempObj[field].replace(/\s/g, '').split(",");
                tempArr = [...list];
            }
            ;
            body[field] = tempArr;
        });
        req.body = body;
        next();
    };
    return cb;
};
export default Unit;
