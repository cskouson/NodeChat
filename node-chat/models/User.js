const mongoose = require('mongoose');

//user schema
const UserSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);