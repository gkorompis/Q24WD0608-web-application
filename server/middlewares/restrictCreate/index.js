const Unit = (req, res, next) => {
    const { body } = req;
    if (!body) {
        return res.status(400).json({ message: "Bad request at request body!" });
    }
    ;
    const header = req && req.headers || {};
    const { sessionOrganization, sessionUsername, sessionRole } = header;
    console.log(">>>header session variable", { sessionOrganization, sessionUsername, sessionRole });
    // const {sessionUsername, sessionRole, sessionOrganization} = req.cookies;
    if (sessionRole !== "superadmin") {
        console.log(">>> restrict create field createdBy, and store");
        // const {createdBy} = req.body;
        req.body = Object.assign(Object.assign({}, body), { createdBy: sessionUsername, store: sessionOrganization });
    }
    else {
        const { createdBy } = req.body;
        req.body = Object.assign(Object.assign({}, body), { createdBy: createdBy || sessionUsername, store: sessionOrganization });
    }
    // if(sessionRole=="member"){
    //     console.log(">>> restrict create for role member")
    //     req.body = {
    //         ...req.body,
    //         createdBy: sessionUsername
    //     }
    // };
    console.log(">>> passed at restrict create");
    next();
};
export default Unit;
