import { connection } from "../../connection";
import { Estudante } from "../../types";

export const dadosTodosEstudantes = async ():Promise <any> => {
    const estudantes:Estudante[] = await connection("labesystem_estudante")
    .select("*")
    return estudantes
}