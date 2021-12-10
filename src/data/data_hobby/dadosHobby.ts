import { connection } from "../../connection";
import { Hobby } from "../../types";

export const dadosHobby = async ():Promise <any> => {
    const hobbies:Hobby[] = await connection("labesystem_hobby")
    .select("*")
    return hobbies
}