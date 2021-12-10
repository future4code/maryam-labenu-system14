import {Request, Response} from "express";
import { dadosHobby } from "../../data/data_hobby/dadosHobby";


export const buscarHobby = async (req:Request, res: Response) => {
    try {

        const hobbies = await dadosHobby()
        console.log(hobbies)
        res.status(200) .send({hobbies})

        if(!hobbies){
            throw new Error("Não há hobbies cadastrados!")
        }
       
    } catch (error:any) {
        console.log(error)
        res.status(400).send(error.message || error.sqlMessage)
    }
}