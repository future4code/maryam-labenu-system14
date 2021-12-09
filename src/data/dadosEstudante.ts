import { connection } from "../connection";


export const dadosEstudante = async (nome:any): Promise <any> =>{
    const result = await connection("labesystem_estudante") 
    .select("*")
    .where({nome:nome})
    return result[0]
    
}