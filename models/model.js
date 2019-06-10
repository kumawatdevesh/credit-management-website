const mongoose = require('mongoose');

var users = new mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('user', users);