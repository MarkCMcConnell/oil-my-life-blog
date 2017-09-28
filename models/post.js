var mongoose = require('mongoose');

// Posts Schema
var postSchema = new mongoose.Schema({
  title: String,
  image: String,
  // imageSmall: String,
  content: String,
  tags: [String],
  postDate: {
    type: Date,
    default: Date.now
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]

});

module.exports = mongoose.model('Post', postSchema);
