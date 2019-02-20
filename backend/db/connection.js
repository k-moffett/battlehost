const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}, console.log("db is up"))

module.exports = (db) = mongoose.connection