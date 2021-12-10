import { connection } from "../../connection";

export const dadosTurmas = async ():Promise <any> => {
    const result = await connection("labesystem_turma")
    .select("*")
    return result[0]
}
