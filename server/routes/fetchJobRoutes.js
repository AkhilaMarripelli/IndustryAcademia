const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/api/job-postings', async (req, res) => {
    try {
        const jobPostings = await Job.find();
        res.json(jobPostings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
