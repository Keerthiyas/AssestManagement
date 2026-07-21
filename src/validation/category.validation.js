const { requiredString } = require("./common.validation");

const createCategoryValidation = [
    requiredString("name", "Category Name")
];

module.exports = {
    createCategoryValidation
};