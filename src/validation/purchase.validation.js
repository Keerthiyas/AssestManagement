const {
    mongoIdValidation,
    numberValidation,
    dateValidation
} = require("./common.validation");

const createPurchaseValidation = [
    mongoIdValidation("asset", "Asset"),
    mongoIdValidation("vendor", "Vendor"),
    numberValidation("quantity", "Quantity"),
    numberValidation("unitPrice", "Unit Price"),
    dateValidation("purchaseDate", "Purchase Date")
];

module.exports = {
    createPurchaseValidation
};