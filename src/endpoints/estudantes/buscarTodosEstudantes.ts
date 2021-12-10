import {Request, Response} from "express";
import { dadosTodosEstudantes } from "../../data/data_estudantes/dadosTodosEstudantes";

export const buscarTodosEstudantes = async (req:Request, res: Response) => {
    try {

        const estudantes = await dadosTodosEstudantes()
        res.status(200) .send({estudantes})

        if(!estudantes){
            throw new Error("Não há estudantes cadastrados!")
        }
       
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}