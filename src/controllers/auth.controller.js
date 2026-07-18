const authService = require("../services/auth.service");
const register = async(req,res)=>{
    try{
        const user = await authService.register(req.body);
        res.status(201).json({
            message:"User regiterd",user
        });

    }
    catch(err){
        res.status(400).json({
            error:err.message
        });

    }
};

const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);

        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({
            error: error.message,
        });
    }
};
module.exports = {
    register,
    login,
};