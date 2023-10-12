const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true, 'Username is required!']
    },
    email:{
        type: String,
        required:[true, 'Email is required!']
    },
    password:{
        type: String,
        required:[true, 'Password is required!']
    },
    groups:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Group'
    },
    owe_to_others:{
        type: Number
    },
    owed_to_you:{
        type: Number
    },
    balance_with_friends:{
        balance: {
            id: mongoose.Schema.Types.ObjectId,
            balance: Number 
        }
    }
})

module.exports = mongoose.model('userSchema', userSchema)