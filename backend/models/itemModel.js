const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    
}, {timestamps: true}
);

module.exports = mongoose.model('Item', itemSchema);





