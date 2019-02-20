const mongoose = require('mongoose')
const userSchema =  require('./UserSchema')
const db = require('../connection')

const user = mongoose.model('user', userSchema);

user.create({
    userName: "name",
    email: "test",
    password: "pass"
},function (err) {
    if (err) return handleError(err);
    // saved!
  });