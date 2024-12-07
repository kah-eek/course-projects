import { randomUUID } from "crypto";
import { UseCaseInterface } from "../../../domain/sharedwork/UseCase.interface";
import { User } from "../../../domain/user/User.entity";
import { UserRepositoryInterface } from "../../../domain/user/UserRepository.interface";
import { AddUserDTOInput, AddUserDTOOutput } from "./addUser.dto";

class AddUserUseCase extends UseCaseInterface {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    super();
    this.userRepository = userRepository;
  }

  execute(input: AddUserDTOInput): AddUserDTOOutput {
    const user = new User(randomUUID(), input.name);

    this.userRepository.addUser(user);

    return new AddUserDTOOutput(user.id, user.name);
  }
}

export { AddUserUseCase };
