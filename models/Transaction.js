const mongoose = require('mongoose');

//Schema for model
const transactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true, 'Add Text'],
    },
    amount:{
        type: Number,
        required: [true, 'Add Amount'],
    },
    note: {
        type: String,
        required: [false, 'Add Note']
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);