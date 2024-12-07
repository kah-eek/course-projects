import { UseCaseInterface } from "../../../domain/sharedwork/UseCase.interface";
import { UserRepositoryInterface } from "../../../domain/user/UserRepository.interface";
import { FindUserDTOInput, FindUserDTOOutput } from "./findUser.dto";

class FindUserUsecase extends UseCaseInterface {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    super();
    this.userRepository = userRepository;
  }

  execute(input: FindUserDTOInput): FindUserDTOOutput {
    const foundUser = this.userRepository.findUser(input.id);

    return new FindUserDTOOutput(foundUser.id, foundUser.name);
  }
}

export { FindUserUsecase };
