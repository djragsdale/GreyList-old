var db = require('./db');
var List = db.model('List', {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    lastupdated: { type: Date, default: Date.now }
});

module.exports = List;

    //items: [{
    //    id: { type: Number, required: true },
    //    seqno: { type: Number },
    //    checked: { type: Boolean, default: false },
    //    lastupdated: { type: Date, default: Date.now },
    //    text: { type: String }
    //}],
    //items: [],

// Do I need this to auto-increment the IDs
////// This should auto-increment the IDs
////List.pre('save', function(next) {
////    var list = this;
////    
////    //if (list.isNew) {
////    //    list.findByIdAndUpdate(
////    //    );
////    //} else {
////        next();
////    //}
////});
