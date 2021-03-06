const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  username: String,
  secretname:String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      secretname:String,
      createdAt: String
    }
  ],
  likes: [
    {
      username: String,
      secretname:String,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);
