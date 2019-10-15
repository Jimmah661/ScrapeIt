var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({});

var Articles = mongoose.model("Articles", ArticlesSchema);
