var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SavedSchema = new Schema({
  title: {},
  link: {},
  body: {}
});

var Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;
