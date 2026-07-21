const {
    requiredString,
    mongoIdValidation,
    numberValidation,
    positiveIntegerValidation,
    dateValidation
} = require("./common.validation");

const { body } = require("express-validator");

const createAssetValidation = [

    requiredString("assetcode", "Asset Code"),

    requiredString("assetname", "Asset Name"),

    requiredString("serialnumber", "Serial Number"),

    mongoIdValidation("category", "Category"),

    mongoIdValidation("vendor", "Vendor"),

    requiredString("brand", "Brand"),

    requiredString("model", "Model"),

    dateValidation("purchaseDate", "Purchase Date"),

    numberValidation("purchaseCost", "Purchase Cost"),

    positiveIntegerValidation("warrantyPeriod", "Warranty Period"),

    body("status")
        .optional()
        .isIn(["AVAILABLE", "ASSIGNED", "REPAIR", "RETIRED"])
        .withMessage("Invalid Status"),

    requiredString("location", "Location")
];

module.exports = {
    createAssetValidation
};