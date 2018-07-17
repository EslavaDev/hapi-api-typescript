import * as Hapi from "hapi";
import * as Joi from 'joi';
import { 
    fetchAll, 
    remove, 
    save, 
    update
} from "./Controller";
import { fetchAllOptions, AuthOptions } from "./Options";
import { User } from '../../models/index';
import * as Boom from 'boom';
import Utilities from '../../Utilities';
//films
export function Init(server : Hapi.Server, ...params: any[]){
    console.log(`the module user is loaded`);

    server.route({
        options:fetchAllOptions,
        path: "/api/staff", 
        method: "GET", 
        handler: fetchAll
    });

    server.route({
        path: "/api/staff/{id}", 
        method: "DELETE", 
        handler: remove
    });

    server.route({
        options:AuthOptions,
        path: "/api/staff", 
        method: "POST", 
        handler:  async(request, reply) =>{
            try{
                let user = await new User(request.payload).fetch()
                if(!user){
                    return Boom.unauthorized();
                }
                return Utilities.generateToken(user);
            }catch(error){
                return Boom.badRequest(error);
            }
        }
    });

    server.route({
        path: "/api/staff/{id}", 
        method: "PUT", 
        handler: update
    });


}