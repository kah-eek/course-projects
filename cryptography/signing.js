import { generateKeyPairSync, createSign, createVerify } from "crypto";

let document = "That's a critical and top-secret document 😲";

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

const signer = createSign("rsa-sha256").update(document);
const hashSignature = signer.sign(privateKey, "hex");

// ⚠️ Intercepting the document...
document += "\nYour stake in the company's partnership is zero percent.";

// Verifying the signature:
const verifier = createVerify("rsa-sha256").update(document);
const isAuthenticDoucument = verifier.verify(publicKey, hashSignature, "hex");

console.log(`Is it authentic? ${isAuthenticDoucument}`); // false.
