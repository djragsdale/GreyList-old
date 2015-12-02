// This doesn't work unless mongod has been run. '"C:\Program Files\Server\3.0\bin\mongod" -dbpath "C:\Program Files\MongoDB\database" --rest'

var mongoose = require('mongoose')
var url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/todo'
mongoose.connect(url, function () {
    console.log('mongodb connected')
})
module.exports = mongoose
