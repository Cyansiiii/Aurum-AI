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

// Replace actual newlines with literal \n characters for single-line env var usage
const singleLineKey = privateKey.replace(/\n/g, '\\n');
console.log(singleLineKey);
