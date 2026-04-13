export class User {
  constructor(
    private readonly id: number,
    private name: string,
    private email: string,
    private password: string,
    private role: Role
  ) {}

  get safeData() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
    };
  }

  isAdmin() {
    return this.role === Role.ADMIN;
  }
}
export enum Role {
  CLIENTE = "cliente",
  ADMIN = "admin",
}