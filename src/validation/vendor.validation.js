const {
    requiredString,
    emailValidation
} = require("./common.validation");

const createVendorValidation = [
    requiredString("vendorname", "Vendor Name"),
    requiredString("contactperson", "Contact Person"),
    emailValidation(),
    requiredString("phone", "Phone"),
    requiredString("address", "Address")
];

module.exports = {
    createVendorValidation
};