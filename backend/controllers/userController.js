const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const signupUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;

    const userExist = await User.findOne({email});
    if(userExist){
        return res.status(400).json({message:'User Already Exist..!'})
    }
    const user = await User.create({
        name,email,password
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            token:generateToken(user._id)
        });
    }else{
        return res.status(400).json({message:'User Not Found'});
    }
});

const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    }else{
        return res.status(401).json({message:'Invalid Email or Password'})
    }
})

module.exports = {signupUser,loginUser};