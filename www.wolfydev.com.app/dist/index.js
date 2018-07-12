"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const notifier = require("node-notifier");
var server = Config_1.getServerConfig();
notifier.notify(server.host + '  ' + server.port + '    ' + server.jwtTimeout);
//# sourceMappingURL=index.js.map