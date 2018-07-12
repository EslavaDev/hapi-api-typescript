//imports
import * as Hapi from 'hapi';

//creating server
const server : Hapi.Server = new Hapi.Server({
  port:8080,
  host: "0.0.0.0"
});

( async () => {
  await server.start();
  console.log(`the server is running at port ${server.info.port}`)
})();