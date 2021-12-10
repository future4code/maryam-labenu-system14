import { connection } from "../../connection";
import { Especialidades } from "../../types";

export const dadosEspecialidades = async ():Promise <any> => {
    const especialidade:Especialidades[] = await connection("labesystem_especialidade")
    .select("*")
    return especialidade
}
