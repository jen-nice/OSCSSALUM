$(document).ready(function (){
$("#java").on("click", function(){
  var message = $("<span>Hubba</span>");
  $("h1").append(message);
  $("#java").remove();
});
});
