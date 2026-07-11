const categoryRepository = require("../repositories/category.repository");

const createCategory = async (data) => {
    const existingCategory = await categoryRepository.findByName(data.name);

    if (existingCategory) {
        throw new Error("Category already exists");
    }

    return await categoryRepository.create(data);
};

const getAllCategories = async () => {
    return await categoryRepository.findAll();
};

const getCategoryById = async (id) => {
    const category = await categoryRepository.findById(id);

    if (!category) {
        throw new Error("Category not found");
    }

    return category;
};

const updateCategory = async (id, data) => {
    const category = await categoryRepository.update(id, data);

    if (!category) {
        throw new Error("Category not found");
    }

    return category;
};

const deleteCategory = async (id) => {
    const category = await categoryRepository.remove(id);

    if (!category) {
        throw new Error("Category not found");
    }

    return category;
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};