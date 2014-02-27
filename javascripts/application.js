$(document).ready(function (){
  $("#slideshow").css("overflow", "hidden");
  $("ul#slides").cycle({
	fx: 'fade',
	pause: 1,
	prev: '#prev',
	next: '#next',
});

$("#slideshow").hover(function() {
	$("ul#nav").fadeIn();
	},
		function() {
	$("ul#nav").fadeOut();
	});
/*$("h1").on("click", function(){
  var message = $("<span>Hbibti</span>");
  $("h1").text('message');*/
});

