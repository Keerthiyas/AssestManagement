const categoryservice = require('../services/category.service');

const createCategory = async (req, res) => {
    try {
        const category = await categoryservice.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getCategoryById = async (req, res) => {
    try {
        const category = await categoryservice.getCategoryById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await categoryservice.updateCategory(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryservice.deleteCategory(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryservice.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getAllCategories
};