import ProductoModel from "../models/Productos";
import { Producto } from "../interfaces/producto.interface";

const insertProducto= async (producto: Producto)=>{
    const Response = await ProductoModel.create(producto);
    return Response;
}

const updateProducto= async (id:string,producto: Producto)=>{
    const Response = await ProductoModel.findByIdAndUpdate(id,producto);
    return Response;
}

const getProducto= async (id:string)=>{
    const Response = await ProductoModel.findById(id);
    return Response;
}

const getProductosPages= async (pageNumber:number,productsPerPage:number) =>{
    const Response = await ProductoModel.find().skip((pageNumber - 1) * productsPerPage).limit(productsPerPage);
    return Response;
}

const getProductos= async ()=>{
    const Response = await ProductoModel.find({});
    return Response;
}

const deleteProducto= async (id:string)=>{
    const Response = await ProductoModel.findByIdAndDelete(id)
    return Response;
}


export {insertProducto, getProductos, updateProducto, deleteProducto, getProducto, getProductosPages}