const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  comments: [],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Example', questionSchema)
