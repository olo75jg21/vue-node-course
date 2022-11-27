const yup = require('yup');

const yupNumberSchema = yup.object({
    number: yup
        .string()
        .min(9)
        .max(9)
        .required()
});

module.exports = { yupNumberSchema };