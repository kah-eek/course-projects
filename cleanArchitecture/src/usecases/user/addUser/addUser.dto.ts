import { UUID } from "crypto";

class AddUserDTOInput {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class AddUserDTOOutput {
  public id: UUID;
  public name: string;

  constructor(id: UUID, name: string) {
    this.id = id;
    this.name = name;
  }
}

export { AddUserDTOInput, AddUserDTOOutput };
