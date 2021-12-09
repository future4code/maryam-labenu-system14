import { connection } from "../../connection";

export const dadosDocente = async ():Promise <any> => {
    const result = await connection("labesystem_docente")
    .select("*")
    return result[0]
}