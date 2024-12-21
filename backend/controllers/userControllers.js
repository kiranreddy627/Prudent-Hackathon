const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }
    }   catch (error) {
        return res.status(500).json({message: 'Server error'});
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({name, email, password: hashedPassword});
        const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({result: user, token});    
    }   catch (error) {
        return res.status(500).json({message: 'Server error'});
    }

}

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: 'User does not exist'});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({result: user, token});
    }   catch (error) {
        return res.status(500).json({message: 'Server error'});
    }
}

module.exports = {signup, login};