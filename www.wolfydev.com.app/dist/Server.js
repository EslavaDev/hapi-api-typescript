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
//imports
const Hapi = require("hapi");
//creating server
const server = new Hapi.Server({
    port: 8080,
    host: "0.0.0.0"
});
(() => __awaiter(this, void 0, void 0, function* () {
    yield server.start();
    console.log(`the server is running at port ${server.info.port}`);
}))();
//# sourceMappingURL=Server.js.map