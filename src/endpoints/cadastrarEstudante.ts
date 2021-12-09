import {Request, Response} from "express";
import moment from "moment";
import { connection } from "../connection";
import { Estudante } from "../types";

export const cadastrarEstudante  = async (req:Request, res: Response) => {
    try {
        const {nome, email, data_nasc, turma_id} = req.body;

        if(!nome || !email || !data_nasc || !turma_id){
            throw new Error("Está faltando informações!")
        }

        const estudante:Estudante = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc: moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD"),
            turma_id
        }

        await connection("labesystem_estudante").insert(estudante)

        res.status(200).send("Estudante cadastrado com sucesso!")

    } catch (error:any) {
        console.log(error)
        res.status(400).send({message: error.message})
    }
}