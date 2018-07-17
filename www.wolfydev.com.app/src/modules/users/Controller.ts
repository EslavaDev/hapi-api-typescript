import * as Hapi from "hapi";
import { User } from "../../models";
import * as Boom from "boom";

export async function fetchAll(
  request: Hapi.Request,
  reply: Hapi.ResponseToolkit
){
  try{
    let records = await User.fetchAll();
    return records.toJSON();
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
      let model: User = await new User({id}).destroy();
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
      let model: User = await new User(request.payload).save();
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
      let model: User = await new User({id}).save(<any> request.payload,  {patch: true}); // pide la propiedad id 
      if(!model)
        return Boom.notFound();
      return model.toJSON();
    }
  }catch(err){
    return Boom.badRequest(err.sqlMessage);
  }
}
