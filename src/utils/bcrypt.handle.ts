import { hash ,compare} from "bcryptjs"

const encrypt=async (pass:string) => {
    const Passwordhash = await hash(pass,10);
    return Passwordhash;
}

const verified= async (pass:string,hash:string)=>{
    const comparehash = await compare(pass,hash);
    return comparehash;
}

export{encrypt,verified}