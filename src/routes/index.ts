import { Router} from "express";
import { readdirSync } from "fs";

const PAT_ROUTER = `${__dirname}`;
const router = Router()

const cleanFileName = (fileName:string)=>{
    return fileName.split('.').shift()?.toLowerCase();
}
readdirSync(PAT_ROUTER).filter((filename)=>{
    const cleanName = cleanFileName(filename)
    console.log(cleanName);
    if (cleanName != "index") {
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanName}`,moduleRouter.router)
        })
    }
})

export default router;