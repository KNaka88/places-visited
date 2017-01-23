//BUSINESS LOGIC
function PlaceVisited(placename, landmark, timeofyear, notes) {
  this.placeName = placename;
  this.landmark = landmark;
  this.timeOfYear = timeofyear;
  this.notes = notes;
}



//INTEREFACE LOGIC
$(function(){
  $("form#places-visited").submit(function(event){
    var placeName = $("input#placename").val();
    var landmark = $("input#landmark").val();
    var timeOfYear = $("input#timeofyear").val();
    var notes = $("textarea#notes").val();
    var placesVisited = new PlaceVisited(placeName, landmark, timeOfYear, notes);

  $("div #show-result").show();
    $("#show-result ul").append("<li><span class='placelist'>" + placesVisited.placeName + "</span></li>");

    $(".placelist").last().click(function() {
      $("#results-detail").show();
      $(".name-of-place").text(placesVisited.placeName);
      $(".place-landmark").text(placesVisited.landmark);
      $(".time-place-visited").text(placesVisited.timeOfYear);
      $(".place-notes").text(placesVisited.notes);
    });
    event.preventDefault();
  });
});
