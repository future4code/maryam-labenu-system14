import {Request, Response} from "express";
import { dadosEspecialidades } from "../../data/data_especialidades/dadosEspecialidades";


export const buscarEspecialidades= async (req:Request, res: Response) => {
    try {

        const especialidades = await dadosEspecialidades()
        console.log(especialidades)
        res.status(200) .send({especialidades})

        if(!especialidades){
            throw new Error("Não há especialidades cadastradas!")
        }

    } catch (error:any) {
        console.log(error)
        res.status(400).send(error.message || error.sqlMessage)
    }
}
