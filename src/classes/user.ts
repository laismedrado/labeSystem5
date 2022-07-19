export class User {
    private id: string
    private name: string
    private email: string
    private birthDate: Date
    private classId: string

    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: Date,
        classId: string
    ) {
        console.log("Class User Constructor")
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.classId = classId
    }

    public getId() {
        return this.id;
    }
    public setId(id: string) {
        if(!id){
            throw new Error("Parâmetro não informado!")
        };
        
        this.id = id;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getEmail() {
        return this.email;
    }
    public setEmail(email: string) {
        this.email = email;
    }
    public getBirthDate() {
        return this.birthDate;
    }
    public setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }
    public getClassId() {
        return this.classId;
    }
    public setClassId(classId: string) {
        this.classId = classId;
    }
}