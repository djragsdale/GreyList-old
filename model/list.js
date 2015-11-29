var mongoose = require('mongoose');
var listSchema = new mongoose.Schema({
    id: Number,
    title: String,
    lastupdated: { type: Date, default: Date.now }
});
