const userRepository = require("../repositories/user.repository");

const createUser = async (data) => {

    const existingUser = await userRepository.findByEmail(data.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    return await userRepository.create(data);
};

const getAllUsers = async () => {
    return await userRepository.findAll();
};

const getUserById = async (id) => {

    const user = await userRepository.findById(id);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

const updateUser = async (id, data) => {

    const user = await userRepository.update(id, data);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

const deleteUser = async (id) => {

    const user = await userRepository.remove(id);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};