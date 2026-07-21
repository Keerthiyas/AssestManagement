const { body } = require("express-validator");

const requiredString = (field, name) => {
    return body(field)
        .trim()
        .notEmpty()
        .withMessage(`${name} is required`);
};

const emailValidation = (field = "email") => {
    return body(field)
        .trim()
        .isEmail()
        .withMessage("Invalid email address");
};

const passwordValidation = () => {
    return body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters");
};

const mongoIdValidation = (field, name) => {
    return body(field)
        .isMongoId()
        .withMessage(`Invalid ${name}`);
};

const numberValidation = (field, name) => {
    return body(field)
        .isNumeric()
        .withMessage(`${name} must be a number`);
};

const positiveIntegerValidation = (field, name) => {
    return body(field)
        .isInt({ min: 0 })
        .withMessage(`${name} must be a positive integer`);
};

const dateValidation = (field, name) => {
    return body(field)
        .isISO8601()
        .withMessage(`Invalid ${name}`);
};

module.exports = {
    requiredString,
    emailValidation,
    passwordValidation,
    mongoIdValidation,
    numberValidation,
    positiveIntegerValidation,
    dateValidation
};