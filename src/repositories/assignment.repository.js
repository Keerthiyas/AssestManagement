const assignmentRepository = require("../repositories/assignment.repository");

const assetRepository = require("../repositories/assest.repository");
const userRepository = require("../repositories/user.repository");

const createAssignment = async (data) => {

    // Check Asset
    const asset = await assetRepository.findById(data.asset);

    if (!asset) {
        throw new Error("Asset not found");
    }

    // Check Employee
    const employee = await userRepository.findById(data.employee);

    if (!employee) {
        throw new Error("Employee not found");
    }

    // Check Asset Status
    if (asset.status !== "AVAILABLE") {
        throw new Error("Asset is already assigned");
    }

    // Check Existing Assignment
    const existingAssignment =
        await assignmentRepository.findActiveAssignment(data.asset);

    if (existingAssignment) {
        throw new Error("Asset already has an active assignment");
    }

    // Create Assignment
    const assignment =
        await assignmentRepository.createAssignment(data);

    // Update Asset Status
    await assetRepository.updateAsset(asset._id, {
        status: "ASSIGNED",
    });

    return assignment;
};

const getAllAssignments = async () => {
    return await assignmentRepository.findAll();
};

const getAssignmentById = async (id) => {

    const assignment = await assignmentRepository.findById(id);

    if (!assignment) {
        throw new Error("Assignment not found");
    }

    return assignment;
};

const updateAssignment = async (id, data) => {

    const assignment =
        await assignmentRepository.updateAssignment(id, data);

    if (!assignment) {
        throw new Error("Assignment not found");
    }

    return assignment;
};

const deleteAssignment = async (id) => {

    const assignment =
        await assignmentRepository.findById(id);

    if (!assignment) {
        throw new Error("Assignment not found");
    }

    // Make Asset Available Again
    await assetRepository.updateAsset(assignment.asset._id, {
        status: "AVAILABLE",
    });

    return await assignmentRepository.deleteAssignment(id);
};

module.exports = {
    createAssignment,
    getAllAssignments,
    getAssignmentById,
    updateAssignment,
    deleteAssignment,
};