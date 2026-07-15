const User = require("../models/User");

const createUser = async (data) => {
    return await User.create(data);
};

const findById = async (id) => {
    return await User.findById(id);
};

const findByEmail = async (email) => {
    return await User.findOne({ email });
};

const update = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await User.findByIdAndDelete(id);
};

const findAll = async () => {
    return await User.find().sort({ createdAt: -1 });
};

module.exports = {
    createUser,
    findByEmail,
    findAll,
    findById,
    update,
    remove,
};