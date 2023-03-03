import { Schema ,Types, model, Model} from "mongoose";
import { Usuario } from "../interfaces/usuario.interface";

const UsuarioShema = new Schema<Usuario>(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Apellido:{
            type:String,
            required: true,
        },
        Cedula:{
            type:String,
            required: true,
            unique:true
        },
        Correo:{
            type:String,
            required: true,
            unique:true
        },
        Password:{
            type:String,
            required: true,
        }
    },{
        timestamps:true,
        versionKey:false
    }
);

const UsuarioModel = model('usuarios',UsuarioShema);
export default UsuarioModel;