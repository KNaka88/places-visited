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

  $("div #show-result").show();
    $("#show-result ul").append("<li><span class='places'>" + placeName + "</span></li>");
    event.preventDefault();
  });
});
