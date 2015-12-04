var db = require('./db');
var ListItem = db.model('ListItem', {
    id: { type: Number, required: true },
    listId: { type: Number, required: true },
    seqno: { type: Number },
    checked: { type: Boolean, default: false },
    lastupdated: { type: Date, default: Date.now },
    text: { type: String }
});

module.exports = ListItem;

//var mongoose = require('mongoose');
//var listItemSchema = new mongoose.Schema({
//    id: Number,
//    listId: Number,
//    seqno: Number,
//    checked: Boolean,
//    lastupdated: { type: Date, default: Date.now },
//    text: String
//});
