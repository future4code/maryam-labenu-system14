import {Request, Response} from "express";
import { connection } from "../../connection";
import { Hobby } from "../../types";

export const cadastrarHobby = async (req:Request, res:Response) => {

    try {
        const {nome} = req.body;

        if(!nome){
            throw new Error("Está faltando informações!")
        }
        const hobby:Hobby = {
            id: Date.now().toString(),
            nome
        }
        await connection("labesystem_hobby").insert(hobby)
        res.status(200).send("Hobby cadastrado com sucesso!")

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }

}