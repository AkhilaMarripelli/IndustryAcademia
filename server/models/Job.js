const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    endDate:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Job', JobSchema);
