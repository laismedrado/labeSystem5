import { Request, Response } from "express"
import { Instructor } from "../classes/instructor"
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

export default async function createInstructor(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birth_date, class_id, specialty } = req.body
    const id = generateId()

    if (!name || !email || !class_id || !birth_date) {
      throw new Error("Está faltando algum dado")
    }

    const instructor = new Instructor(
      id,
      name,
      email,
      birth_date,
      class_id
    )

    const specialtyId = generateId()

    await connection("instructor")
      .insert(instructor)

    await connection("instructor_specialty")
      .insert({
        id: specialtyId,
        instructor_id: id,
        specialty_id: specialty
      })

    res.send(`${name} teve seu cadastro realizado com sucesso, como pessoa instrutora.`)

  } catch (error: any) {
    res.send(error.message).status(201)
  }
}