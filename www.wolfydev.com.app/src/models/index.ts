import Bookshelf from "../Database";
//se debe definir definir interfaz a cada modelo
/* interface IFilm{
    title: string,
    description: string
} */

export class Film extends Bookshelf.Model<any>{
    idAttribute = "film_id";
    get tableName(){ return "film"; }
}

export class User extends Bookshelf.Model<any>{
    idAttribute = "staff_id";
    get tableName(){ return "staff"; }
}