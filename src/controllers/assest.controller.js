const assestService  = require('../services/assest.service');

const createAssest = async (req, res) => {
    try {
        const assest = await assestService.createAssest(req.body);
        res.status(201).json(assest);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};

const getAllAssests = async (req, res) => {
    try {
        const assests = await assestService.getAllAssests();
        res.json(assests);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getAssestById = async (req, res) => {
    try {
        const assest = await assestService.getAssestById(req.params.id);
        res.json(assest);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const updateAssest = async (req, res) => {
    try {
        const assest = await assestService.updateAssest(req.params.id, req.body);
        res.json(assest);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }   
};

const deleteAssest = async (req, res) => {
    try {
        const assest = await assestService.deleteAssest(req.params.id);
        res.json(assest);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }   
};

module.exports = {
    createAssest,
    getAllAssests,
    getAssestById,
    updateAssest,
    deleteAssest};