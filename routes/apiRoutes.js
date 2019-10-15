var cheerio = require("cheerio");
var db = require("../models");
var cheerio = require("cheerio");

module.exports = function (app) {
    app.get("/api/scrape", function(req, res) {
        axios.get("https://www.gamesindustry.biz/").then(function(response) {
        var $ = cheerio.load(response.data);

        $("div .default").each(function() {})
        })
    })
};