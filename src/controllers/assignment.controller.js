const assignmentService = require("../services/assignment.service");

const createAssignment = async (req, res) => {
    try {
        const assignment =
            await assignmentService.createAssignment(req.body);

        res.status(201).json(assignment);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getAllAssignments = async (req, res) => {
    try {
        const assignments =
            await assignmentService.getAllAssignments();

        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getAssignmentById = async (req, res) => {
    try {
        const assignment =
            await assignmentService.getAssignmentById(req.params.id);

        res.status(200).json(assignment);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const updateAssignment = async (req, res) => {
    try {
        const assignment =
            await assignmentService.updateAssignment(
                req.params.id,
                req.body
            );

        res.status(200).json(assignment);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const deleteAssignment = async (req, res) => {
    try {
        const assignment =
            await assignmentService.deleteAssignment(req.params.id);

        res.status(200).json({
            message: "Assignment deleted successfully",
            assignment,
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

module.exports = {
    createAssignment,
    getAllAssignments,
    getAssignmentById,
    updateAssignment,
    deleteAssignment,
};