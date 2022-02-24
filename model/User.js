const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Modal for the User Database.
 * name : String
 * email : String
 * password : String
 * --
 * Here we create schema means the table row value like sql database
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
