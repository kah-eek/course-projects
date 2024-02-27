import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

const secretKey = randomBytes(16).toString("hex");
const payload = { user: "0xc41qu3", skill: "front end" };

const token = jwt.sign(payload, secretKey);
const decodedToken = jwt.verify(token, secretKey);

console.log(`Encoded token: ${token}`);
console.log(`Decoded token: ${JSON.stringify(decodedToken)}`);
