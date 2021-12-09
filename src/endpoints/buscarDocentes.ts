import {Request, Response} from "express";
import moment from "moment";
import { dadosDocente } from "../data/data_docentes/dadosDocente";



export const buscarDocente = async (req:Request, res: Response) => {
    try {

        const docentes = await dadosDocente()
        console.log(docentes)
        res.status(200) .send({
            ...docentes,
            data_nasc: moment(docentes.data_nasc, "YYYY-MM-DD").format("DD/MM/YYYY")
        })

        if(!docentes){
            throw new Error("Estudante não encontrado!")
        }
       
    } catch (error:any) {
        console.log(error)
        res.status(400).send(error.message || error.sqlMessage)
    }


}