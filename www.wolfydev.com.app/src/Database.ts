import { IDatabaseConfig, getDatabaseConfig } from "./Config";
import * as Knex from "knex";
import * as Bookshelf from "bookshelf";
let config : IDatabaseConfig = getDatabaseConfig();
let conn : Knex = Knex(<Knex.Config>{
    client: config.provider,//db engine
    connection:{
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.db,
        charset: config.charset,
        port: config.port
    }
});
let Orm = Bookshelf(conn); 
export default Orm;

