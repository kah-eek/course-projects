import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const message = "Hello, World!";
const key = randomBytes(32);
const initializationVector = randomBytes(16);

const cipher = createCipheriv("aes256", key, initializationVector);

const encryptedMessage =
  cipher.update(message, "utf-8", "hex") + cipher.final("hex");

/*
To make it possible to decrypt this message remotely, it's 
necessary to transmit which algorithm, key, and initializer 
vector was used to encrypt the message, e.g.:
*/

const decipher = createDecipheriv("aes256", key, initializationVector);

const dencryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");

console.log(`
    Encrypted message: ${encryptedMessage}
    Decrypted message: ${dencryptedMessage}
`);
