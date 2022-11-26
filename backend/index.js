const express = require('express');
const dialer = require('dialer').Dialer;
const { Server } = require('socket.io');

const server = require('./utils/server.js');

const httpServer = express();

server.applyServerMiddleware(httpServer);

// Run server
const serverInstance = httpServer.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

// Setup dialer
const config = {
    url: 'https://uni-call.fcc-online.pl',
    login: '',
    password: ''
};

dialer.configure(null);

// Setup websocket
const io = new Server(serverInstance)

server.applyRoutes(httpServer, dialer, io);