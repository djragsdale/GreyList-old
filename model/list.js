var db = require('./db');
var listSchema = new db.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    items: [{
        seqno: { type: Number },
        checked: { type: Boolean },
        text: { type: String }
    }]
}, {
    timestamps: { updatedAt: 'lastupdated' }
});
// var List = db.model('List', {
//     id: { type: Number, required: true },
//     title: { type: String, required: true },
//     items: [{
//         seqno: { type: Number },
//         checked: { type: Boolean },
//         text: { type: String }
//     }]
// });
var List = db.model('List', listSchema);

module.exports = List;

    //items: [{
    //    id: { type: Number, required: true },
    //    seqno: { type: Number },
    //    checked: { type: Boolean, default: false },
    //    lastupdated: { type: Date, default: Date.now },
    //    text: { type: String }
    //}],
    //items: [],

// Do I need this to auto-increment the IDs or timestamp the lastupdated

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

// ItemSchema.pre('save', function(next){
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });
// or should I do the following in my schema (available as of 4.0)
// timestamps: { updatedAt: 'lastupdated' }
