const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");
const jwt = require("jsonwebtoken")

const register = async(data)=>{
    const exsitinguser = await userRepository.findByEmail(data.email);
    if(exsitinguser){
        throw new Error("Email already Exists");
    }
    const hashedpass = await bcrypt.hash(data.password,10);
    data.password = hashedpass;
    const user = await userRepository.createUser(data);
    return user;
};

const login = async(data)=>{
    const user = await userRepository.findByEmail(data.email);
    if(!user){
        throw new Error ("Email already exists");
    }
    const isMatch = await bcrypt.compare(data.password,user.password);
    if(!isMatch){
        throw new Error ("Invalid Password or Email");
    }
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
      return {
        message: "Login successful",
        token,
        user,
    };

}
module.exports = {
    register,
    login,
};