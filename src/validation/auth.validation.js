const {
    requiredString,
    emailValidation,
    passwordValidation
} = require("./common.validation");

const registerValidation = [
    requiredString("name", "Name"),
    emailValidation(),
    passwordValidation()
];

const loginValidation = [
    emailValidation(),
    requiredString("password", "Password")
];

module.exports = {
    registerValidation,
    loginValidation
};