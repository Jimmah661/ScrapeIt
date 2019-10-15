var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SavedSchema = new Schema({
  title: {},
  link: {}
});

var Saved = mongoose.model("Saved", SavedSchema);
