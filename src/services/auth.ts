import { Auth } from "../interfaces/auth.interface";
import { Usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/Usuarios";
import { encrypt } from "../utils/bcrypt.handle";

const registerNewUser = async (userData: Usuario)=>{
    const userM = UsuarioModel;
    const checkIs = await userM.findOne({Correo:userData.Correo});
    if (checkIs) return "ALREADY_USER";
    const passhash =  await encrypt(userData.Password);
    userData.Password = passhash;
    const registerNewUser = await userM.create(userData);

    return registerNewUser;
};
const LoginUser =(authUser: Auth)=>{};

export {registerNewUser, LoginUser}