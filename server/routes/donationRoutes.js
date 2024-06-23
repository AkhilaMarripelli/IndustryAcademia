const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// @route   POST /api/donate
// @desc    Handle donation form submissions
// @access  Public
router.post('/', async (req, res) => {
    const { amount, nameOnCard, cardNumber, expirationDate, cvv } = req.body;

    try {
        const newDonation = new Donation({
            amount,
            nameOnCard,
            cardNumber,
            expirationDate,
            cvv
        });

        await newDonation.save();

        res.status(201).json({ message: 'Donation received successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
