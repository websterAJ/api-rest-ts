import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "algogeneral";

const signToken =(id:string) => {
    const jwt = sign({id},JWT_SECRET,{expiresIn:"2h"});
    return jwt;
}

const verifyToken =(token:string) => {
    if (token != "") {
        const IsCorrect = verify(token,JWT_SECRET);
        return IsCorrect;
    }else{
        return false;
    }
}

export {signToken,verifyToken} ;