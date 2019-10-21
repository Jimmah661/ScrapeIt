var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
  title: {},
  link: {},
  body: {}
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;
