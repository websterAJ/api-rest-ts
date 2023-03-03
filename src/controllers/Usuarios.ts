import{ Request, Response} from "express";
import { insertUsuario, getUsuarios, getUsuario , deleteUsuario} from "../services/Usuarios";
import handleHttp from "../utils/error.handle";

const getusuario = async ({params}: Request, res:Response)=>{
    try {
        const {id}=params;
        const Data= await getUsuario(id);
        if (Data?.$isEmpty) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
        
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const getAllusuarios = async ({body}: Request, res:Response)=>{
    try {
        const Data= await getUsuarios();
        if (Data != null) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const updateUsuario = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const createUsuario = async ({body}: Request, res:Response)=>{
    try {
        const createUsuario= await insertUsuario(body);
        res.send(createUsuario);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const deleteusuario = async ({params}: Request, res:Response)=>{
    try {
        const {id}=params;
        const Data= await deleteUsuario(id);
        if (Data?.$isEmpty) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

export { getAllusuarios , getusuario,updateUsuario, createUsuario, deleteusuario};