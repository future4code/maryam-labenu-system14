import {Request, Response} from "express";
import { atualizarDocente } from "../../data/data_docentes/atualizarDocente";

export const mudarDocente = async (req:Request, res: Response): Promise <any> => {

        try {
            if(req.params.id === "" || req.body.turma_id === ""){
                throw new Error("Insira os dados corretamente!")
            }
            await atualizarDocente(
                req.params.id,
                req.body.turma_id
            )

            res.status(200) .send("Docente atualizado")

        } catch (error:any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}