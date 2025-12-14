const { generateKeyPairSync } = require('crypto');
const { execSync } = require('child_process');

console.log("Generating new 2048-bit RSA Private Key...");

const { privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

console.log("\n=== NEW PRIVATE KEY (COPY BELOW IF AUTO-UPDATE FAILS) ===");
console.log(privateKey);
console.log("=== END OF PRIVATE KEY ===\n");

try {
  console.log("Attempting to set CONVEX_AUTH_PRIVATE_KEY via Convex CLI...");
  // We use a properly escaped string for the command line
  // For many shells, passing the multiline string directly works if quoted properly, 
  // but to be safe we can try to set it. 
  // However, passing multiline secrets via CLI args can be tricky.
  // We will try to use the standard input or just warn the user.
  
  // Note: 'convex env set' takes NAME=VALUE.
  // We need to be careful with newlines.
  // A safer approach for the user is to copy-paste from the console output 
  // into the dashboard if this script is running in a limited shell.
  
  // Let's try to set it.
  execSync(`npx convex env set CONVEX_AUTH_PRIVATE_KEY "${privateKey}"`, { stdio: 'inherit' });
  console.log("\n✅ Successfully set CONVEX_AUTH_PRIVATE_KEY!");
  console.log("The server should restart automatically. Please try signing in again.");
} catch (error) {
  console.error("\n⚠️  Could not set environment variable automatically.");
  console.error("Error details:", error.message);
  console.log("\nACTION REQUIRED: Please copy the key printed above (including -----BEGIN... and ...END-----)");
  console.log("and paste it into your Convex Dashboard -> Settings -> Environment Variables -> CONVEX_AUTH_PRIVATE_KEY");
}
