require('dotenv').config();

module.exports = {
    server_port: process.env.SERVER_PORT || 3000,
    dialer_url: process.env.DIALER_URL || '',
    dialer_login: process.env.DIALER_LOGIN || '',
    dialer_password: process.env.DIALER_PASSWORD || '',
    my_phone_number: process.env.MY_PHONE_NUMBER || '',
    fake_phone_number: process.env.FAKE_PHONE_NUMBER || '555555555',
};