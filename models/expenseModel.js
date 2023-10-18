const mongoose = require('mongoose');
const User = require('./userModel')
const Group = require('./groupModel')


const expenseSchema = mongoose.Schema({
    description: String,
    amount: Number,
    date: Date,
    group: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group' 
    },
    participants: [{
         user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        }, 
        paidShare: Number,
        owes : Number,
        owed: Number 
    }],
});

module.exports = mongoose.model('Expense', expenseSchema)