const express = require('express');
const router = express.Router();
const {getAllItems, getItemById, createItem, updateItem, deleteItem} = require('../controllers/itemController');

router.get('/getall', getAllItems);
router.get('/getbyid/:id', getItemById);
router.post('/create', createItem);
router.put('/update/:id', updateItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;