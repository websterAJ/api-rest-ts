import{ Request, Response} from "express";
import UsuarioModel from "../models/Usuarios";
import { Usuario } from "../interfaces/usuario.interface";

const insertUsuario= async (usuario: Usuario)=>{
    const Response = await UsuarioModel.create(usuario);
    return Response;
}

const updateUsuario= async (id:string,usuario: Usuario)=>{
    const Response = await UsuarioModel.findByIdAndUpdate(id,usuario);
    return Response;
}

const getUsuario= async (id:string)=>{
    const Response = await UsuarioModel.findById(id);
    return Response;
}

const getUsuarios= async ()=>{
    const Response = await UsuarioModel.find({});
    return Response;
}

const deleteUsuario= async (id:string)=>{
    const Response = await UsuarioModel.findByIdAndDelete(id)
    return Response;
}


export {insertUsuario, getUsuarios, updateUsuario, deleteUsuario, getUsuario}