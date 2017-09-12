var mongoose = require('mongoose');

// Posts Schema
var postSchema = new mongoose.Schema({
  title: String,
  imageLarge: String,
  imageSmall: String,
  content: String,
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
  }
});

module.exports = mongoose.model('Post', postSchema);
