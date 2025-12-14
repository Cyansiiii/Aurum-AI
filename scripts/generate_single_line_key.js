import { generateKeyPairSync } from 'crypto';

const { privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

// Replace actual newlines with literal "\n" string so it can be pasted as a single line
const singleLineKey = privateKey.replace(/\n/g, '\\n');

console.log(singleLineKey);
