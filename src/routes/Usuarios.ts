import { Router,Request,Response } from "express";
import {getusuario,getAllusuarios,updateUsuario,createUsuario, deleteusuario} from "../controllers/Usuarios";
const router = Router()

router.get("/",getAllusuarios);
router.post("/",createUsuario);
router.get("/:id",getusuario);
router.put("/:id",updateUsuario);
router.delete("/:id",deleteusuario);

export { router };