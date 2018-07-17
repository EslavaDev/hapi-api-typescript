"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("hapi");
const path = require("path");
const Inert = require("inert");
const Vision = require("vision");
const Jwt = require("hapi-auth-jwt2");
const HapiSwagger = require("hapi-swagger");
const util_1 = require("util");
const fs = require("fs");
const Swagger_1 = require("./Swagger");
const Auth_1 = require("./Auth");
const readDirAsync = util_1.promisify(fs.readdir);
function init(config) {
    return __awaiter(this, void 0, void 0, function* () {
        let server = new hapi.Server({
            port: config.port,
        });
        yield server.register([
            Vision,
            Inert,
            Jwt
        ]);
        yield server.register({
            plugin: HapiSwagger,
            options: Swagger_1.default
        });
        server.auth.strategy('jwt', 'jwt', {
            key: config.jwtSecret,
            validate: Auth_1.default,
            verifyOptions: {
                //ignoreExpiration: true,
                algorithms: ['HS256']
            }
        });
        server.auth.default('jwt');
        let modulesPath = path.join(__dirname, "modules");
        let directories = yield readDirAsync(modulesPath);
        directories.forEach((dirName, index) => {
            let dirPath = path.join(modulesPath, dirName);
            if (fs.statSync(dirPath).isDirectory()) {
                require(dirPath).Init(server, config);
            }
        });
        yield server.start(); //just to start the server
    });
}
exports.init = init;
//# sourceMappingURL=Server.js.map