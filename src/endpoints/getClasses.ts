import { Request, Response } from "express";
import connection from "../data/connection";

export default async function getClasses(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const classList = await connection("class")
    .select("*")
    .where('class.module','!=', '0')
    
    res.send(classList)
  } catch (error: any) {
    res.send(error.message).status(201)
  }
}