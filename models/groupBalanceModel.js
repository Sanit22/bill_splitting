const mongoose = require('mongoose');
const User = require('./userModel')
const Group = require('./groupModel')

const groupBalanceSchema = new mongoose.Schema({
    group: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group' 
    },
    fromUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
    toUser: {
         type: mongoose.Schema.Types.ObjectId, ref: 'User' 
        },
    amount: Number,
  });

  module.exports = mongoose.model('GroupBalance', groupBalanceSchema);