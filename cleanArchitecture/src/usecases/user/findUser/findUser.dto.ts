import { UUID } from "crypto";

class FindUserDTOInput {
  public id: UUID;

  constructor(id: UUID) {
    this.id = id;
  }
}

class FindUserDTOOutput {
  public id: UUID;
  public name: string;

  constructor(id: UUID, name: string) {
    this.id = id;
    this.name = name;
  }
}

export { FindUserDTOInput, FindUserDTOOutput };
