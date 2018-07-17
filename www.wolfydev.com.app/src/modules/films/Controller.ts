import * as Hapi from "hapi";
import { Film } from "../../models";
import * as Boom from "boom";

export async function fetchAll(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
    let records = await Film.fetchAll();
    return records.toJSON();
  }catch(err){
    return Boom.badRequest();
  }
}

export async function findById(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
    let id = request.params.id;
    if(id){
      let model: Film = await new Film({film_id: id}).fetch();
      if(!model)
        return Boom.notFound();
      return model.toJSON() ;
    }
  }catch(err){
    return Boom.badRequest();
  }
}

export async function remove(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
    let id = request.params.id;
    if(id){
      let model: Film = await new Film({id}).destroy();
      if(!model)
        return Boom.notFound();
      return reply.response("ok").code(200);
    }
  }catch(err){
    return Boom.badRequest(err.sqlMessage);
  }
}

export async function save(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
      let model: Film = await new Film(request.payload).save();
      if(!model)
        return Boom.notFound();
      return model.toJSON();
    
  }catch(err){
    return Boom.badRequest(err.sqlMessage);
  }
}

export async function update(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
    let id = request.params.id;
    if(id){
      let model: Film = await new Film({id}).save(<any> request.payload,  {patch: true}); // pide la propiedad id 
      if(!model)
        return Boom.notFound();
      return model.toJSON();
    }
  }catch(err){
    return Boom.badRequest(err.sqlMessage);
  }
}
