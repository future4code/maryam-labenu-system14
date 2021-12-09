import {Request, Response} from "express";
import { atualizarEstudante } from "../../data/data_estudantes/atualizarEstudante";

export const mudarEstudante = async (req:Request, res: Response): Promise <any> => {

        try {
            if(req.params.id === "" || req.body.turma_id === ""){
                throw new Error("Insira os dados corretamente!")
            }
            await atualizarEstudante(
                req.params.id,
                req.body.turma_id
            )

            res.status(200) .send("Estudante atualizado")

        } catch (error:any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}