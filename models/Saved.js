var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SavedSchema = new Schema({});

var Saved = mongoose.model("Saved", SavedSchema);
