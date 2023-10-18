const mongoose = require('mongoose');
const User = require('./userModel')

const groupSchema = mongoose.Schema({
    name:{
        type: String
    },
    members:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Group', groupSchema)