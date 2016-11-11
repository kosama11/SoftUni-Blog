const mongoose = require('mongoose');

let userSchema = {
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    fullName: {type: String}
};

const User = mongoose.model('User', userSchema);

models.exports = User;