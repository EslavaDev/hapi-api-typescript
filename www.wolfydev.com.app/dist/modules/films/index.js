"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
const Options_1 = require("./Options");
//films
function Init(server, ...params) {
    console.log(`the module films is loaded`);
    server.route({
        options: Options_1.findByIdOption,
        path: "/api/films/{id}",
        method: "GET",
        handler: Controller_1.findById
    });
    server.route({
        options: Options_1.fetchAllOptions,
        path: "/api/films",
        method: "GET",
        handler: Controller_1.fetchAll
    });
    server.route({
        path: "/api/films/{id}",
        method: "DELETE",
        handler: Controller_1.remove
    });
    server.route({
        path: "/api/films",
        method: "POST",
        handler: Controller_1.save
    });
    server.route({
        path: "/api/films/{id}",
        method: "PUT",
        handler: Controller_1.update
    });
}
exports.Init = Init;
//# sourceMappingURL=index.js.map