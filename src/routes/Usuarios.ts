import { Router,Request,Response } from "express";
import {getusuario,getAllusuarios,updateUsuario,createUsuario, deleteusuario} from "../controllers/Usuarios";
import { checkJwt } from "../middleware/session";
const router = Router()

router.get("/",checkJwt,getAllusuarios);
router.get("/:id",checkJwt,getusuario);
router.put("/:id",checkJwt,updateUsuario);
router.delete("/:id",checkJwt,deleteusuario);

export { router };