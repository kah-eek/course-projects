import { randomUUID } from "crypto";
import { User } from "./domain/user/User.entity";

const u = new User(randomUUID(), "John Doe");

console.log("log:", u.name);
