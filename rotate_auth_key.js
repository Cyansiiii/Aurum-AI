import { generateKeyPairSync } from 'crypto';
import { spawn } from 'child_process';

// Generate a new 2048-bit RSA Key
const { privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

console.log("Generated Private Key:");
console.log(privateKey);
console.log("\nAttempting to set CONVEX_AUTH_PRIVATE_KEY...");

// Attempt to set the environment variable using the Convex CLI
const child = spawn('npx', ['convex', 'env', 'set', 'CONVEX_AUTH_PRIVATE_KEY', privateKey], { stdio: 'inherit' });

child.on('close', (code) => {
  if (code === 0) {
    console.log("Successfully set CONVEX_AUTH_PRIVATE_KEY via CLI.");
  } else {
    console.error("Failed to set CONVEX_AUTH_PRIVATE_KEY via CLI. Please copy the key above and set it manually in the dashboard.");
    process.exit(1);
  }
});
