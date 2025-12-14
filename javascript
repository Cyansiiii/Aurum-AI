import { generateKeyPairSync } from 'crypto';

const { privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// Stringify to handle newlines as \\n, then remove outer quotes
const finalKeyString = JSON.stringify(privateKey).slice(1, -1);
console.log(finalKeyString);
