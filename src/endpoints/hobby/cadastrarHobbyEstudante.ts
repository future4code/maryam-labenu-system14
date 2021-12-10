import {Request, Response} from "express"
import { connection } from "../../connection";
import { HobbyEstudante } from "../../types";

export const cadastrarHobbyEstudante = async (req:Request, res:Response) => {
    try {
        const {hobby_id, estudante_id} = req.body;

        if(!estudante_id && !hobby_id){
            throw new Error("Está faltando informações!")
        }
        
        const hobbies:HobbyEstudante = {
            id: Date.now().toString(),
            estudante_id,
            hobby_id
        }
        await connection("labesystem_estudante_hobby")
        .insert(hobbies)
        res.status(200).send("O hobby do estudante foi cadastrado!")


    } catch (error:any) {
        console.log(error)
        res.status(400).send({message: error.message})
    }
}