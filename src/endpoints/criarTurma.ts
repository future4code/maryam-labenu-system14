import {Request, Response} from "express"
import { connection } from "../connection";

type Turma = {
  id: string
  nome: string
  docentes: string
  estudantes: string
  modulo: number
}

export const criarTurma = async (req: Request, res: Response) => {
  try {
    const {nome, docentes, estudantes, modulo} =req.body;

    if (!nome || !docentes || !estudantes || !modulo){
      throw new Error("Está faltando informaçōes.");

    }

    const turma:Turma = {
      id:Date.now().toString(),
      nome,
      docentes,
      estudantes,
      modulo,
    }

    await connection("labesystem_turma").insert(turma);

    res.status(200).send("Turma criada!")

  } catch (error: any) {
      res.status(400).send({message: error.message})
  }
}
