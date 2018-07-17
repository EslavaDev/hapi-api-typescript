import * as hapi from "hapi";
import * as path  from "path";
import * as Inert from "inert";
import * as Vision from "vision";
import * as Jwt from "hapi-auth-jwt2";
import HapiSwagger = require('hapi-swagger');
import { promisify, format  } from "util";
import * as fs from "fs";
import { IServerConfig } from "./Config";
import Swagger from "./Swagger";
import validatefn from "./Auth";
const readDirAsync = promisify(fs.readdir);

export  async function init(config : IServerConfig) {
    let server = new hapi.Server({
        port: config.port, 
        //host: config.host
    });

    await server.register([
        Vision,
        Inert,
        Jwt
    ]);

    await server.register({
        plugin: HapiSwagger,
        options: Swagger
    })

    server.auth.strategy('jwt', 'jwt', {
        key: config.jwtSecret,
        validate: validatefn,
        verifyOptions:{
            //ignoreExpiration: true,
            algorithms:['HS256'] 
        }
    });

    server.auth.default('jwt');

    let modulesPath : string = path.join(__dirname, "modules");
    let directories : string[] =  await readDirAsync(modulesPath);
    directories.forEach((dirName: string, index: number)=>{
        let dirPath = path.join(modulesPath,dirName);
            if(fs.statSync(dirPath).isDirectory()){
                require(dirPath).Init(server, config);
            }
    })
    await server.start();//just to start the server
}
