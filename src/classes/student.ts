import { User } from "./user";

export class Student extends User {
   
  private hobby?: string;
  
    constructor(
      id: string,
      name: string,
      email: string,
      birthDate: Date,
      classID: string,
      
    ) {
      super(id, name, email, birthDate, classID);
    }
  
    public setHobby(hobby: string) {
      this.hobby = hobby;
    }
}