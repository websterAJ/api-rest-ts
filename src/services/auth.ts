import { Auth } from "../interfaces/auth.interface";
import { Usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/Usuarios";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

const registerNewUser = async (userData: Usuario)=>{
    const userM = UsuarioModel;
    const checkIs = await userM.findOne({Correo:userData.Correo});
    if (checkIs) return "ALREADY_USER";
    return await encrypt(userData.Password).then((result)=>{
        userData.Password = result;
        return userM.create(userData);
    });
};
const LoginUser = async ({Correo, Password}: Auth)=>{
    const userM = UsuarioModel;
    const checkIs = await userM.findOne({Correo:Correo});
    if (!checkIs) return "NOT_FOUND_USER";

    const IsCorrect = await verified(Password,checkIs.Password)
    if (!IsCorrect)  return "PASSWORD_INCORRECT"
    
    const data = {
        token: signToken(checkIs.id),
        user : {
            Nombre: checkIs.Nombre,
            Apellido: checkIs.Apellido,
            Cedula: checkIs.Cedula,
            Correo: checkIs.Correo
        }
    }
    return data;
};

export {registerNewUser, LoginUser}