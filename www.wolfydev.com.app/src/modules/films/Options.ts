import * as Hapi from "hapi";
import * as Joi from 'joi';


export const findByIdOption=<Hapi.RouteOptions>{
  
    auth: "jwt",
    cors: true,
    description: "Use this method to find a movie by id",
    validate:{
        params:{
            id: Joi.number().integer().description("this is the id of the movie").required()
        }
    },
    tags:["api","films"]

}

export const fetchAllOptions=<Hapi.RouteOptions>{
  
    auth: false,
    cors:true,
    description: "Use this method to get list of films",
    tags:["api","films"]

}