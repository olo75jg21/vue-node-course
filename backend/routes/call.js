const dialer = require('dialer').Dialer;

const { numberValidation } = require('../middlewares/validation');
const { yupNumberSchema } = require('../validation/numberValidationSchema');
const appConfig = require('../config/config');

module.exports = (httpServer, io) => {
    httpServer.post('/call/', numberValidation(yupNumberSchema), async (req, res) => {
        try {
            const number1 = req.body.number;
            const number2 = appConfig.fake_phone_number // tutaj dajemy swój numer -> app.config.my_phone_number

            // setup dialer
            const config = {
                url: appConfig.dialer_url,
                login: appConfig.dialer_login,
                password: appConfig.dialer_password
            };

            dialer.configure(null);

            bridge = await dialer.call(number1, number2);

            let oldStatus = null
            const possibleStatuses = ['ANSWERED', 'FAILED', 'BUSY', 'NO ANSWER'];

            let interval = setInterval(async () => {
                let currentStatus = await bridge.getStatus();

                if (currentStatus !== oldStatus) {
                    oldStatus = currentStatus
                    io.emit('status', currentStatus)
                }

                if (possibleStatuses.includes(currentStatus)) {
                    console.log('stop')
                    clearInterval(interval)
                }
            }, 1000);

            res.status(200).json({
                id: '123', status: bridge.STATUSES.NEW
            });

        } catch (e) {
            console.log(e);
        }
    })
};