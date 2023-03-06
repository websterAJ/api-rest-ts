import { hash ,compare} from "bcryptjs"

const encrypt=async (pass:string) => {
    const PasswordHash = await hash(pass,10);
    return PasswordHash;
}

const verified= async (pass:string,hash:string)=>{
    const IsCorrect = await compare(pass,hash);
    return IsCorrect;
}

export{encrypt,verified}