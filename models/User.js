const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);
if (mongoose.models.User) {
    User = mongoose.model('User');
  } else {
    User = mongoose.model('User', UserSchema);
  }

module.exports = User;