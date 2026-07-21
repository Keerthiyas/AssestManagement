const {
    mongoIdValidation,
    dateValidation
} = require("./common.validation");

const createAssignmentValidation = [
    mongoIdValidation("asset", "Asset"),
    mongoIdValidation("employee", "Employee"),
    dateValidation("assignedDate", "Assigned Date")
];

module.exports = {
    createAssignmentValidation
};