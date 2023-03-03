import { Auth } from "./auth.interface";

export interface Usuario extends Auth{
    Nombre:string;
    Apellido:string;
    Cedula:string;
}