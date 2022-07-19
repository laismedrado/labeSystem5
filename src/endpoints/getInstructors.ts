import { Request, Response } from "express"
import connection from "../data/connection";

export default async function getInstructors(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const instructorsList = await connection("instructor")
    .select("*")

    res.send(instructorsList)
  } catch (error: any) {
    res.send(error.message).status(201)
  }
}