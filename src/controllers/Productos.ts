import{ Request, Response} from "express";
import { insertProducto, getProductos, getProducto , deleteProducto, getProductosPages} from "../services/Productos";
import handleHttp from "../utils/error.handle";

const getproducto = async ({params}: Request, res:Response)=>{
    try {
        const {id}=params;
        const Data= await getProducto(id);
        if (Data?.$isEmpty) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
        
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const getAllproductos = async ({body}: Request, res:Response)=>{
    try {
        let result = {};
        const page = parseInt(body?.page) || 1
        const productsPerPage = 10
        
        const Data= await getProductosPages(page,productsPerPage);
        
        if (Data != null) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const updateProducto = async ({body}: Request, res:Response)=>{
    try {
        console.log(body);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const createProducto = async ({body}: Request, res:Response)=>{
    try {
        const createProducto= await insertProducto(body);
        res.send(createProducto);
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

const deleteproducto = async ({params}: Request, res:Response)=>{
    try {
        const {id}=params;
        const Data= await deleteProducto(id);
        if (Data?.$isEmpty) {
            res.send(Data);
        }else{
            handleHttp(res,"Datos no encontrados");
        }
    } catch (error) {
        handleHttp(res,"Error al procesar su peticion", error);
    }
};

export { getAllproductos , getproducto,updateProducto, createProducto, deleteproducto};