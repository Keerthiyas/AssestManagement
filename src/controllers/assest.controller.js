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

    const page = parseInt(req.query.page) || 1;

    const limit = parseInt(req.query.limit) || 10;

    const result = await assestService.getAllAssests(page, limit);

    res.status(200).json({
        success: true,
        ...result
    });

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