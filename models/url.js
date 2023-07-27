const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    redirecturl: {
        type: String,
        required: true,
    },
    shorturl: {
        type: String,
    },
    count: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("URL", urlSchema);