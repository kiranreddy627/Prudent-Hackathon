const Item = require('../models/itemModel');

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(200).json(item);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(item);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}   

const deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.status(200).json(item);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllItems, getItemById, createItem, updateItem, deleteItem};