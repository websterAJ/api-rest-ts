import{ Request, Response} from "express";
import { insertUsuario } from "../services/Usuarios";
import handleHttp from "../utils/error.handle";

const postUsuario = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion");
    }
};

const getUsuarios = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion");
    }
};

const updateUsuario = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion");
    }
};

const createUsuario = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
        const createUsuario= await insertUsuario(body);
        res.send(createUsuario);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion");
    }
};

const deleteUsuario = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion");
    }
};

export { postUsuario , getUsuarios , updateUsuario, createUsuario, deleteUsuario};