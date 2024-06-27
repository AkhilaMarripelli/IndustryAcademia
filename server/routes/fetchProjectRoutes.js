const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.get('/api/donation-postings', async (req, res) => {
    try {
        const donationPostings = await Project.find();
        res.json(donationPostings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
