import * as Hapi from "hapi";
import * as Joi from 'joi';


export const fetchAllOptions=<Hapi.RouteOptions>{
    cors: true,
    description: "Use this method to get list of staff",
    tags:["api","staff"]

}

export const AuthOptions=<Hapi.RouteOptions>{
    auth: false,
    cors:true,
    notes: "generate a new Token",
    description: "use this metod for signin staff",
    validate:{
        payload:Joi.object({
            username: Joi.string().max(30).required()
            .description("Username that the user'll use to acces to the app")
            .example("batman")
            .label("username"),
            password: Joi.string().max(40).required()
            .description("the password for accesing to the platform")
            .label("password")
        }).label("payload")
    },
    plugins:{
        'hapi-swagger':{
            payloadType: 'form'
        }
    },
    tags:["api","staff"]

}