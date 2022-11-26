module.exports = (httpServer, dialer, io) => {
    httpServer.get('/call/:number1/:number2', (req, res) => {
        try {
            const number1 = req.params.number1;
            const number2 = req.params.number2;
            dialer.call(number1, number2);
            res.json({ success: true });
        } catch (e) {
            console.log(e);
        }
    });

    httpServer.post('/call/', async (req, res) => {
        try {
            const number1 = req.body.number;
            const number2 = '555555555' // tutaj dejemy swój numer
            console.log('Dzwonie', number1, number2)
            bridge = await dialer.call(number1, number2);
            let oldStatus = null
            let interval = setInterval(async () => {
                let currentStatus = await bridge.getStatus();
                console.log(currentStatus)
                if (currentStatus !== oldStatus) {
                    oldStatus = currentStatus
                    io.emit('status', currentStatus)
                }
                if (
                    currentStatus === "ANSWERED" ||
                    currentStatus === "FAILED" ||
                    currentStatus === "BUSY" ||
                    currentStatus === "NO ANSWER"
                ) {
                    console.log('stop')
                    clearInterval(interval)
                }
            }, 1000)
            res.status(200).json({
                id: '123', status: bridge.STATUSES.NEW
            });
        } catch (e) {
            console.log(e);
        }
    })
};