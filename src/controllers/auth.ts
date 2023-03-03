import{ Request, Response} from "express";
import { registerNewUser, LoginUser} from "../services/auth";
import handleHttp from "../utils/error.handle";

const registerCtrl = async ({body}: Request, res:Response)=>{
    try {
        const Data= await registerNewUser(body);
       res.send(Data);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const loginCtrl = async ({body}: Request, res:Response)=>{
    try {
        const Data= await LoginUser(body);
        if (Data != null) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

export {registerCtrl,loginCtrl}