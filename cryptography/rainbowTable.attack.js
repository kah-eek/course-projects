import { createHash } from "crypto";

// Example of Rainbow Table attacking.

const generateHash = (data, algorithm) =>
  createHash(algorithm).update(data).digest("hex");

const leakedHashes = [
  "21232f297a57a5a743894a0e4a801fc3",
  "cedf5ab7b5c5852b3ed35d7dbe3c3835",
  "81dc9bdb52d04dc20036dbd8313ed055",
];

const commonPasswords = [
  "senha",
  "123456",
  "senha123",
  "admin",
  "senha123456",
  "1234",
  "blink182",
  "meuAniversario",
  "senha123456",
  "brasil",
  "102030",
];

const mappedCommonPasswords = new Map(
  commonPasswords.map((commonPassword) => [
    generateHash(commonPassword, "MD5"),
    commonPassword,
  ])
);

const foundPasswords = leakedHashes.reduce(
  (hashes, hash) =>
    mappedCommonPasswords.has(hash)
      ? [...hashes, [hash, mappedCommonPasswords.get(hash)]]
      : hashes,
  []
);

console.log(foundPasswords);
