import { Request, Response } from "express"
import { ClassTech } from "../classes/classTech"
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

export default async function createClass(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, module } = req.body
    const id = generateId()

    console.log(req.body);
    
    if (!name || !module) {
      throw new Error("Está faltando algum dado")
    }

    const classTech = new ClassTech(
      id,
      name,
      module
    )
    await connection("class")
      .insert(classTech)
    res.send(`Turma ${name} cadastrada com sucesso`)

  } catch (error: any) {
    res.send(error.message).status(201)
  }
}