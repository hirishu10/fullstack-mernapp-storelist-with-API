const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Modal for the User Database.
 * name : String
 * --
 * Here we create schema means the table row value like sql database
 */
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
