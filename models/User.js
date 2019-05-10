const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(passportLocalMongoose);
if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', UserSchema);
}

module.exports = User;