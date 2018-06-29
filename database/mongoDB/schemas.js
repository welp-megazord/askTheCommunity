const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
  user_id: Number,
  restaurant_id: Number,
  text: String,
  parent_id: Number,
  helpful: Number
});

const userSchema = new Schema ({
  username: String,
  imageUrl: String
});

const Question = mongoose.model('question', questionSchema);
const User = mongoose.model('user', userSchema);

module.exports = {
  User,
  Question
}
