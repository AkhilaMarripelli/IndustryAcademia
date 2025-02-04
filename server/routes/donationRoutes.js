const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// @route   POST /api/donate
// @desc    Handle donation form submissions
// @access  Public
router.post('/', async (req, res) => {
    const { title, Description, RollNumber} = req.body;

    try {
        const newDonation = new Donation({
            title,
            Description,
            RollNumber
        });

        await newDonation.save();

        res.status(201).json({ message: 'Project Uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
