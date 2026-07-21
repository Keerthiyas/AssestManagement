
const {
    mongoIdValidation,
    requiredString,
    numberValidation
} = require("./common.validation");

const createMaintenanceValidation = [
    mongoIdValidation("asset", "Asset"),
    requiredString("issue", "Issue"),
    numberValidation("cost", "Cost")
];

module.exports = {
    createMaintenanceValidation
};