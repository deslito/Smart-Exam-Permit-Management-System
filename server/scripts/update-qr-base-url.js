const os = require("os");
const fs = require("fs");
const path = require("path");

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

try {
    const ip = getLocalIP();
    const envPath = path.resolve(__dirname, "../.env");
    let envContent = fs.readFileSync(envPath, 'utf8');

    // Split content into lines
    const lines = envContent.split('\n');
    
    // Find and replace the QR_BASE_URL line
    const updatedLines = lines.map(line => {
        if (line.startsWith('QR_BASE_URL=')) {
            return `QR_BASE_URL=http://${ip}:8081/(invigilators)/qr/`;
        }
        return line;
    });

    // Join lines back together
    const updatedContent = updatedLines.join('\n');
    
    // Write the updated content back to the file
    fs.writeFileSync(envPath, updatedContent);
    
    console.log(`✅ Updated QR_BASE_URL to use IP: ${ip}`);
    console.log(`New value: QR_BASE_URL=http://${ip}:8081/(invigilators)/qr/`);

} catch (error) {
    console.error('❌ Failed to update .env file:', error);
    console.error(error.message);
}