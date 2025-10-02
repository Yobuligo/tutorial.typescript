import { User } from "./User";

export class UserRepo {
  private users: User[] = [new User("Alex"), new User("Bertha")];

  findAll(): User[] {
    return this.users;
  }

  create(firstname: string): User {
    return new User(firstname);
  }

  async findById(id: string): Promise<User> {
    return new User();
  }
}
