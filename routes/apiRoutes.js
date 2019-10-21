var cheerio = require("cheerio");
var db = require("../models");
var cheerio = require("cheerio");
var axios = require("axios");

module.exports = function(app) {
  app.get("/loadAll", function(req, res) {
    db.Articles.find({}, function(error, found) {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  });

  app.get("/api/scrape", function(req, res) {
    axios.get("https://www.gamesindustry.biz/").then(function(response) {
      var $ = cheerio.load(response.data);

      $("div .details").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("h2")
          .text();

        result.link = $(this)
          .children("h2")
          .children("a")
          .attr("href");
        result.body = $(this)
          .children(".body")
          .text();
        db.Articles.create(result)
          .then(function(dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
    });
  });

  app.get("/api/drop", function(req, res) {
    db.Articles.remove({}, function(error, response) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(response);
        res.send(response);
      }
    });
  });
};
