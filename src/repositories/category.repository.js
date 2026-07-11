const Category = require("../models/Category");

const create = async (data) => {
    return await Category.create(data);
};

const findByName = async (name) => {
    return await Category.findOne({ name });
};

const findAll = async () => {
    return await Category.find().sort({ createdAt: -1 });
};

const findById = async (id) => {
    return await Category.findById(id);
};

const update = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = {
    create,
    findByName,
    findAll,
    findById,
    update,
    remove,
};