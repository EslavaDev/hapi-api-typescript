import  * as Server from "./Server";
import { getServerConfig } from "./Config";

(async function main(){
   let configServer = getServerConfig(); 
   await Server.init(configServer);
})()