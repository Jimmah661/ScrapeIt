var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
  title: {},
  link: {}
});

var Articles = mongoose.model("Articles", ArticlesSchema);
