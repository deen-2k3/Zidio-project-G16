const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    ctc: {
        type: String,
        required: true
    }
});

const Host = mongoose.model('Host', HostSchema);
module.exports = Host;
