import { User } from "./User";
import { UserRepo } from "./UserRepo";

export class UserController {
  findUser(): Promise<User> {
    const userRepo = new UserRepo();
    return userRepo.findById("123");
  }
}
