import { User } from "./user";
export class Instructor extends User {
  
  public specialty?: string

  constructor(
    id: string,
    name: string,
    email: string,
    birthDate: Date,
    classId: string,
  ) {
    super(id, name, email, birthDate, classId);
  }
  
  public setSpecialties(specialty: string) {
    this.specialty = specialty;
  }
}