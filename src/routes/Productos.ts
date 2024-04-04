import { Router,Request,Response } from "express";
import {getproducto,getAllproductos,updateProducto,createProducto, deleteproducto} from "../controllers/Productos";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get("/",checkJwt,getAllproductos);
router.post("/register",checkJwt,createProducto);
router.get("/:id",checkJwt,getproducto);
router.put("/:id",checkJwt,updateProducto);
router.delete("/:id",checkJwt,deleteproducto);

export { router };