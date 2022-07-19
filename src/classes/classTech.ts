export class ClassTech {
  private id: string
  private name: string
  private module: number
  
  constructor(
    id: string,
    name: string,
    module: number
  ) {
    this.id = id
    this.name = name
    this.module = module
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getModule(): number {
    return this.module
  }
}