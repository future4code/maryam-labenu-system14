import {Request, Response} from "express"
import { connection } from "../../connection";
import { Turma } from "../../types";


export const criarTurma = async (req: Request, res: Response) => {
  try {
    const {nome, modulo} = req.body;

    if (!nome || !modulo){
      throw new Error("Está faltando informaçōes.");

    }

    const turma:Turma = {
      id:Date.now().toString(),
      nome,
      modulo,
    }

    await connection("labesystem_turma").insert(turma);

    res.status(200).send("Turma criada!")

  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
}
