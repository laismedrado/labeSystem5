import { Request, Response } from "express"
import { Student } from "../classes/student"
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birthDate, classId, hobby } = req.body
    const id = generateId()

    if (!name || !email || !classId || !birthDate) {
      throw new Error("Está faltando algum dado")
    }

    const student = new Student(
      id,
      name,
      email,
      birthDate,
      classId
    )

    const studentHobbyId = generateId()

    const hobbyId = generateId() 

    await connection("student")
      .insert(student)

    await connection("hobby")
    .insert({
        id: hobbyId,
        name: hobby
    })

    await connection("student_hobby")
      .insert({
        id: studentHobbyId,
        student_id: id,
        hobby_id: hobbyId
      })

    res.send(`Cadastro realizado com sucesso.`)

  } catch (error: any) {
    res.send(error.message).status(201)
  }
}