const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phone: String,

    password: String,

    balance: {
        type: Number,
        default: 0
    },

    bankName: String,

    bankNumber: String,

    bankOwner: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);