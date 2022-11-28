const express = require('express');
const { Server } = require('socket.io');

const server = require('./utils/server.js');
const appConfig = require('./config/config');

const httpServer = express();

server.applyServerMiddleware(httpServer);

// Run server
const serverInstance = httpServer.listen(appConfig.server_port, () => {
    console.log(`Example app listening on port ${appConfig.server_port}!`)
});

const io = new Server(serverInstance);

server.applyRoutes(httpServer, io);