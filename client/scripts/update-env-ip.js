const os = require("os");
const fs = require("fs");
const path = require("path");

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

const ip = getLocalIP();
const envPath = path.resolve(__dirname, "../.env.development");
let env = fs.readFileSync(envPath, "utf8");

env = env.replace(
  /EXPO_PUBLIC_API_BASE_URL=.*/g,
  `EXPO_PUBLIC_API_BASE_URL=http://${ip}:5000`
);

fs.writeFileSync(envPath, env);
console.log(`✔️  Set EXPO_PUBLIC_API_BASE_URL to http://${ip}:5000 in .env.development`);