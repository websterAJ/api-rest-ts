import{ NextFunction, Request, Response} from "express";
import { verifyToken } from "../utils/jwt.handle";
const checkJwt = (req: Request, res:Response, next: NextFunction)=>{
    try {
        const jwtHeader = req.headers.authorization || "";
        const jwt = jwtHeader.split(' ').pop();
        if(!verifyToken(`${jwt}`)){
            res.status(401).send({error:"TOKEN_NO_VALIDO"})
        }else{
            next();
        }
    } catch (error) {
        res.status(400).send({error:"SESSION_NO_VALIDAD"})
    }
}

export {checkJwt};