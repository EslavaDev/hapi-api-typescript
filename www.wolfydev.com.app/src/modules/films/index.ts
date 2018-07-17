import * as Hapi from "hapi";
import * as Joi from 'joi';
import { 
    fetchAll, 
    remove, 
    save, 
    findById,
    update
} from "./Controller";
import { fetchAllOptions, findByIdOption } from './Options';
//films
export function Init(server : Hapi.Server, ...params: any[]){
    console.log(`the module films is loaded`);

    server.route({
        options:findByIdOption,
        path: "/api/films/{id}", 
        method: "GET", 
        handler: findById
    });

    server.route({
        options: fetchAllOptions,
        path: "/api/films", 
        method: "GET", 
        handler: fetchAll
    });

    server.route({
        path: "/api/films/{id}", 
        method: "DELETE", 
        handler: remove
    });

    server.route({
        path: "/api/films", 
        method: "POST", 
        handler: save
    });

    server.route({
        path: "/api/films/{id}", 
        method: "PUT", 
        handler: update
    });


}