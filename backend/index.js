const express = require('express');

const server = require('./utils/server.js');

const httpServer = express();

server.applyServerMiddleware(httpServer);

// Run server
const serverInstance = httpServer.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

server.applyRoutes(httpServer, serverInstance);