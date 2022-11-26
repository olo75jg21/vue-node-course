const cors = require('cors');
const bodyParser = require('body-parser');

const applyServerMiddleware = (httpServer) => {
    httpServer.use(bodyParser.json());
    httpServer.use(cors());
    httpServer.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        next();
    });
};

const applyRoutes = (httpServer, dialer, io) => {
    require('../routes/call')(httpServer, dialer, io);
};

module.exports = {
    applyServerMiddleware,
    applyRoutes,
};