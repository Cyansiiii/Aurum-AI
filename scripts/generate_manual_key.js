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

console.log('\n=== COPY THE KEY BELOW (INCLUDING HEADERS) ===\n');
console.log(privateKey);
console.log('\n=== END OF KEY ===\n');
console.log('INSTRUCTIONS:');
console.log('1. Copy the entire key block above (from -----BEGIN... to ...END-----).');
console.log('2. Go to your Convex Dashboard -> Settings -> Environment Variables.');
console.log('3. Update CONVEX_AUTH_PRIVATE_KEY with this value.');
