const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const { Schema } = mongoose;

const user = new Schema({
  email: String,
  password: String,
});

user.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", user);
