var mongoose = require('mongoose');
var listItemSchema = new mongoose.Schema({
    id: Number,
    listId: Number,
    seqno: Number,
    checked: Boolean,
    lastupdated: { type: Date, default: Date.now },
    text: String
});
