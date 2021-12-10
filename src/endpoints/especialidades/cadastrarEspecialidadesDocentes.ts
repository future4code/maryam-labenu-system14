import {Request, Response} from "express"
import { connection } from "../../connection";
import { EspecialidadesDocentes } from "../../types";

export const cadastrarEspecialidadeDocentes = async (req:Request, res:Response) => {
    try {
        const {especialidade_id, docente_id} = req.body;

        if(!docente_id && !especialidade_id){
            throw new Error("Está faltando informações!")
        }

        const hobbies:EspecialidadesDocentes = {
            id: Date.now().toString(),
            docente_id,
            especialidade_id
        }
        await connection("labesystem_docente_especialidade")
        .insert(hobbies)
        res.status(200).send("A especialidade do docente foi cadastrada!")


    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}
