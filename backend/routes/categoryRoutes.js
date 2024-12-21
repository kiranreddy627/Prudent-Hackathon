const express = require('express');
const router = express.Router();
const {getAllCategories, createCategory, getCategoryById, deleteCategory} = require('../controllers/categoryController');

router.get('/getall', getAllCategories);
router.post('/create', createCategory);
router.get('/getbyid/:id', getCategoryById);
router.delete('/delete/:id', deleteCategory);

module.exports = router;
