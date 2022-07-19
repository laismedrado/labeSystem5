import { Request, Response } from "express"
import connection from "../data/connection";

export default async function getStudents(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const name = req.params

    if(!name) {
        throw new Error("favor informe o nome do estudante")
    }

    const studentsList = await connection("student")
    .select("*")
    .join('student_hobby', 'student.id', 'student_hobby.student_id')
    .join('hobby', 'student_hobby.hobby_id', 'hobby.id')
    .select('student.*', 'hobby.name as hobby')
    .where('student.name', req.params.name)

    res.send(studentsList)
  } catch (error: any) {
    res.send(error.message).status(201)
  }
}