import { User } from "./User";

export class UserRepo {
  private users: User[] = [new User("Alex"), new User("Bertha")];

  findAll(): User[] {
    return this.users;
  }

  create(firstname: string): User {
    return new User(firstname);
  }
}
