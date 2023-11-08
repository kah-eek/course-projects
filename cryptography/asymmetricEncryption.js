import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const encryptedMessage = publicEncrypt(publicKey, Buffer.from("Hello, World!"));

// Simulating remote decryption:

const decryptedMessage = privateDecrypt(privateKey, encryptedMessage);

console.log(`
    Encrypted message: ${encryptedMessage.toString("hex")}
    Decrypted message: ${decryptedMessage.toString("utf-8")}
`);
