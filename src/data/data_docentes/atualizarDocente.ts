import { connection } from "../../connection";

export const atualizarDocente = async (id:string, turma_id:string):Promise<any> => {
    if(turma_id){
        await connection.raw(`
            UPDATE labesystem_docente
            SET turma_id ='${turma_id}'
            WHERE id = '${id}'
        `)
    }
}