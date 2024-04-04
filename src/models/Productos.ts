import { Schema ,Types, model, Model} from "mongoose";
import { Producto } from "../interfaces/producto.interface";

const ProductoShema = new Schema<Producto>(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Descripcion:{
            type:String,
            required: true,
        },
        Precio:{
            type:Number,
            required: true,
            unique:true
        },
        Stock:{
            type:Number, 
            required: true,
            unique:true
        },
    },{
        timestamps:true,
        versionKey:false
    }
);

const ProductoModel = model('productos',ProductoShema);
export default ProductoModel;