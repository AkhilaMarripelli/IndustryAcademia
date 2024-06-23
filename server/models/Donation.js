const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },
    nameOnCard: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Donation', donationSchema);
