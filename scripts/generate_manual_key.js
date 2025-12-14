const { generateKeyPairSync } = require('crypto');

const { privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

console.log("==================================================================");
console.log("COPY THE ENTIRE BLOCK BELOW (including BEGIN and END lines):");
console.log("==================================================================");
console.log(privateKey);
console.log("==================================================================");
