const mongoose = require('mongoose');
const User = require('./userModel')

const balanceSchema = new mongoose.Schema({
    fromUser: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    toUser: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    amount: Number,
  });

  module.exports = mongoose.model('Balance', balanceSchema);