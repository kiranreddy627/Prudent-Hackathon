const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Category', categorySchema);



