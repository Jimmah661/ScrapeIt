$(document).ready(
  //scrape webpage for new articles
  $("#scrapeBtn").click(function() {
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "/api/drop"
    })
      .then(function() {
        $.ajax({
          method: "GET",
          url: "/api/scrape"
        });
      })
      .then(function() {
        location.reload();
      });
  })
);

// Create articles on page load
var populatePage = function() {
  $.ajax({
    method: "GET",
    url: "loadAll"
  }).then(function(result) {
    console.log(result);
    result.forEach(function(item) {
      $("#articles").append(function() {
        let update = "<div class='card'>";
        update +=
          "<div class='card-header'><h3 target='_blank' href='" +
          item.link +
          "'>" +
          item.title +
          "</div>";
        update += "<div class='card-body'>" + item.body + "</div>";
        return update;
      });
    });
    //   $("#articles")
  });
};

populatePage();
