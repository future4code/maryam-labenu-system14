import {Request, Response} from "express";
import { atualizarTurmas } from "../../data/data_turmas/atualizarTurmas";

export const mudarModuloTurma = async (req:Request, res: Response): Promise <any> => {

        try {
            if(req.params.id === "" && req.body.modulo === ""){
                throw new Error("Insira os dados corretamente!")
            }
            await atualizarTurmas(
                req.params.id,
                req.body.modulo
            )

            res.status(200) .send("Módulo atualizado")

        } catch (error:any) {
            res.status(400).send(error.message || error.sqlMessage)

        }
}
