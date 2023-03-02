import{ Request, Response} from "express";
import UsuarioModel from "../models/Usuarios";
import { Usuario } from "../interfaces/usuario.interface";

const insertUsuario= async (usuario: Usuario)=>{
    const Response = await UsuarioModel.create(usuario);
    return Response;
}


export {insertUsuario}