// scripts/setenv.js
const fs = require("fs");
const path = require("path");

const envFile = process.env.ENV_FILE;

if (!envFile) {
  console.error("ENV_FILE not specified.");
  process.exit(1);
}

const sourcePath = path.resolve(envFile);
const destPath = path.resolve(".env");

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log(`✔️  Copied ${envFile} -> .env`);
} catch (err) {
  console.error(`❌ Failed to copy ${envFile} to .env:`, err);
  process.exit(1);
}
