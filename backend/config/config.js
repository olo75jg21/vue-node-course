require('dotenv').config();

module.exports = {
    server_port: process.env.SERVER_PORT || 3000,
    // to make app use those credentials (url, login, password) we need to pass config as argument in dialler configuration routes/call.js line: 20
    dialer_url: process.env.DIALER_URL || '',
    dialer_login: process.env.DIALER_LOGIN || '',
    dialer_password: process.env.DIALER_PASSWORD || '',

    // to select which phone number we are using we need to change it in routes/call.js line: 11
    my_phone_number: process.env.MY_PHONE_NUMBER || '',
    fake_phone_number: process.env.FAKE_PHONE_NUMBER || '555555555',
};