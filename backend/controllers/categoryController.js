const Category = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json(category);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllCategories, createCategory, getCategoryById, deleteCategory};