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
const Controller_1 = require("./Controller");
const Options_1 = require("./Options");
const index_1 = require("../../models/index");
const Boom = require("boom");
const Utilities_1 = require("../../Utilities");
//films
function Init(server, ...params) {
    console.log(`the module user is loaded`);
    server.route({
        options: Options_1.fetchAllOptions,
        path: "/api/staff",
        method: "GET",
        handler: Controller_1.fetchAll
    });
    server.route({
        path: "/api/staff/{id}",
        method: "DELETE",
        handler: Controller_1.remove
    });
    server.route({
        options: Options_1.AuthOptions,
        path: "/api/staff",
        method: "POST",
        handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield new index_1.User(request.payload).fetch();
                if (!user) {
                    return Boom.unauthorized();
                }
                return Utilities_1.default.generateToken(user);
            }
            catch (error) {
                return Boom.badRequest(error);
            }
        })
    });
    server.route({
        path: "/api/staff/{id}",
        method: "PUT",
        handler: Controller_1.update
    });
}
exports.Init = Init;
//# sourceMappingURL=index.js.map