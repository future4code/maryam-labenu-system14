import {Request, Response} from "express";
import { connection } from "../../connection";
import { Especialidades } from "../../types";

export const cadastrarEspecialidades = async (req:Request, res:Response) => {

    try {
        const {nome} = req.body;

        if(!nome){
            throw new Error("Está faltando informações!")
        }
        const especialidade:Especialidades = {
            id: Date.now().toString(),
            nome
        }
        await connection("labesystem_especialidade").insert(especialidade)
        res.status(200).send("Especialidade cadastrada com sucesso!")

    } catch (error:any) {
        console.log(error)
        res.status(400).send({message: error.message})
    }

}
