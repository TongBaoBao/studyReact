const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  pwd: String
});

exports.UserSchema = UserSchema;
