import { connection } from "../../connection";
import { Docente } from "../../types";

export const dadosDocente = async ():Promise <any> => {
    const docentes:Docente[] = await connection("labesystem_docente")
    .select("*")
    return docentes
}