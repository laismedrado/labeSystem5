import connection from "../data/connection";

export default async function updateClass(
     id: string,
     module: number
) {
     await connection("class")
          .update('module', module)
          .where('id', id)

}










