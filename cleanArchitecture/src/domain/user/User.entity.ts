import { UUID } from "crypto";

class User {
  public id: UUID;
  public name: string;

  constructor(id: UUID, name: string) {
    this.id = id;
    this.name = name;
  }
}

export { User };
