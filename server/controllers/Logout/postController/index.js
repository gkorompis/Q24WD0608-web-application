var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Unit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("clearing cookies");
        // sign body to jwt;
        // res.cookie('sessionLogout', "a", {httpOnly: true, domain: "5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com", secure: true});
        res.cookie('sessionLogout1', "logoutsuccess13.4", { sameSite: 'none', secure: true });
        res.cookie('sessionRandom', "expired", { sameSite: 'none', secure: true, expires: new Date(1) });
        res.cookie('sessionUsername', "expired", { sameSite: 'none', secure: true, expires: new Date(1) });
        res.cookie('sessionRole', "expired", { sameSite: 'none', secure: true, expires: new Date(1) });
        res.cookie('sessionToken', "expired", { sameSite: 'none', secure: true, expires: new Date(1) });
        res.cookie('sessionRefreshToken', "expired", { sameSite: 'none', secure: true, expires: new Date(1) });
        // res.cookie('sessionUsername', "a");
        // res.cookie('sessionRole',"a");
        // res.cookie('sessionRefresh',"a");
        console.log("??? clearsession");
        // // sign body to jwt;
        // res.clearCookie('sessionToken', {path: "/", domain:"localhost", sameSite: "none", secure: true});// 
        // res.clearCookie('sessionUsername', {path: "/", domain: "5vxe1u381g.execute-api.ap-southeast-3.amazonaws.com", sameSite: "none", secure: true});
        // res.clearCookie('sessionUsername', {path: "/", domain: "localhost", sameSite: "none", secure: true});//
        // res.clearCookie('sessionRole',{path: "/"});
        // res.clearCookie('sessionRefreshToken',{path: "/"});
        return res.status(200).json({ message: "logout success, login sessions are erased" });
    }
    catch (error) {
        console.log(">>> error at postController:", error);
        const errorResponse = error;
        const { message } = errorResponse;
        return res.status(500).json({ message });
    }
});
export default Unit;
