const User = require("../models/User");
const createUser = async (req,res) =>{
    try{

        const {name,email,password,role} = req.body;
        const user = new User({name,email,password,role});
        await user.save();
        res.status(201).json({message:"User created successfully",user});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

}
const getAllUsers = async (req,res) =>{
    try{
        const Users = await User.find();
        res.status(200).json({message:"Users retrieved successfully",Users});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const getUserById = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User retrieved successfully",user});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const updateUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User updated successfully",user});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const deleteUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User deleted successfully",user});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports = {createUser, getAllUsers, getUserById, updateUser, deleteUser};