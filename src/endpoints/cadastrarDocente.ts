import {Request, Response} from "express"
import { connection } from "../connection";
import { Docente } from "../types";

export const cadastrarDocente = async (req:Request, res: Response) => {
    try {
        const {nome, email, data_nasc, turma_id} = req.body;
        
        if(!nome || !email || !data_nasc || !turma_id){
            throw new Error("Está faltando informações!")
        }

        const docente:Docente = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id
        }

        await connection("labesystem_docente").insert(docente)
        res.status(200).send("Docente cadastrado com sucesso!")

    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.message || error.sqlMessage)
    }



}