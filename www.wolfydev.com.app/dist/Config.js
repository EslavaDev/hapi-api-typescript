"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const nconf = require("nconf");
const configProvider = new nconf.Provider({
    env: true,
    store: {
        type: "file",
        file: path.join(__dirname, `./../config/config.${process.env.NODE_ENV || "dev"}.json`)
    }
});
function getServerConfig() {
    return configProvider.get("server"); //mapping the JSON object to IServerConfig interface
}
exports.getServerConfig = getServerConfig;
function getDatabaseCongif() {
    return configProvider.get("database"); //mapping the JSON object to IDatabaseConfig interface
}
exports.getDatabaseCongif = getDatabaseCongif;
//# sourceMappingURL=Config.js.map