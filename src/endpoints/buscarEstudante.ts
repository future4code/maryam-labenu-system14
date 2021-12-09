import {Request, Response} from "express";
import moment from "moment";
import { dadosEstudante } from "../data/data_estudantes/dadosEstudante";



export const buscarEstudante = async (req:Request, res: Response) => {
    try {

        if(!req.query.nome){
            throw new Error("Insira o nome do estudante!")
        }
       
        const estudante = await dadosEstudante(req.query.nome)
        console.log(estudante)
        res.status(200) .send({
            ...estudante,
            data_nasc: moment(estudante.data_nasc, "YYYY-MM-DD").format("DD/MM/YYYY")
        })

        if(!estudante){
            throw new Error("Estudante não encontrado!")
        }
       
    } catch (error:any) {
        console.log(error)
        res.status(400).send(error.message || error.sqlMessage)
    }


}