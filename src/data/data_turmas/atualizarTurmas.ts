import { connection } from "../../connection";

export const atualizarTurmas= async (id:string, modulo:string):Promise<any> => {
    if(modulo){
        await connection.raw(`
            UPDATE labesystem_turma
            SET modulo ='${modulo}'
            WHERE id = '${id}'
        `)
    }
}
