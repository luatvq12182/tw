const fs = require("fs");

const publicKey = fs.readFileSync(__dirname + "/public_key.pem", "utf-8");
const privateKey = fs.readFileSync(__dirname + "/private_key.pem", "utf-8");

const AppConfig = {
    PublicKey: publicKey,
    PrivateKey: privateKey,
};

module.exports = {
    AppConfig,
};
