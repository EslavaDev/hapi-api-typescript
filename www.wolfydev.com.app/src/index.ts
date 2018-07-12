import {getServerConfig, IServerConfig} from './Config';
import notifier = require('node-notifier');

var server: IServerConfig = getServerConfig();

notifier.notify(server.host +'  '+ server.port+'    ' +server.jwtTimeout);