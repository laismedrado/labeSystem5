import connection from "../data/connection";

export default async function updateInstructor(
  id: string,
  class_id: string
) {
  await connection("instructor")
    .update('class_id', class_id)
    .where('id', id);
};






