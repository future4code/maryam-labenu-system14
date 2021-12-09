import { connection } from "../connection";
import { Request, Response } from "express";
import { Turma } from "../types";

export const pegarTurma = async (req: Request, res: Response) => {
  try{
    const turmas:Turma[] = await connection("labesystem_turma")
    res.send(turmas)

  } catch (error: any) {
    res.status(400). send({message: error.message})
  }

}
