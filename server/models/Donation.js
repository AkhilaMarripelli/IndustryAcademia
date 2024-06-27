const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    RollNumber: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Projects', donationSchema);
