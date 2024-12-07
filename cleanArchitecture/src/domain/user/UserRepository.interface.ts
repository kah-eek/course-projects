import type { User } from "./User.entity";

abstract class UserRepositoryInterface {
  abstract addUser(user: User): void;

  abstract findUser(id: User["id"]): User;

  abstract updateUser(user: User): void;

  abstract listUsers(): User[];
}

export { UserRepositoryInterface };
