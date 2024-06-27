const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// @route   POST /api/donate
// @desc    Handle donation form submissions
// @access  Public
router.post('/', async (req, res) => {
    const { title, Description, Role,endDate} = req.body;

    try {
        const newJob = new Job({
            title,
            Description,
            Role,
            endDate
        });

        await newJob.save();

        res.status(201).json({ message: 'Job Uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
