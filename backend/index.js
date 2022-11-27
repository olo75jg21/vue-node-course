const express = require('express');
const { Server } = require('socket.io');

const server = require('./utils/server.js');

const httpServer = express();

server.applyServerMiddleware(httpServer);

// Run server
const serverInstance = httpServer.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

const io = new Server(serverInstance);

server.applyRoutes(httpServer, io);