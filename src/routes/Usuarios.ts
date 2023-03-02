import { Router,Request,Response } from "express";
import {postUsuario,getUsuarios,updateUsuario,createUsuario,deleteUsuario} from "../controllers/Usuarios";
const router = Router()

router.get("/",getUsuarios);
router.post("/",createUsuario);
router.post("/:id",postUsuario);
router.put("/:id",updateUsuario);
router.delete("/:id",deleteUsuario);

export { router };