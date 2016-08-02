function approx_stride() {
	var height = $('#height').val();
	var weight = $('#weight').val();
	var stride = height/weight*15;
	$("#number").html(stride);
}


var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(12.9667, 77.5667)
	  };
	  map = new google.maps.Map(document.getElementById('map'),
	      mapOptions);
	}


var temp = 1;
$(document).ready(function(){
	var recognition = new webkitSpeechRecognition();
	$("#maps").css("height","500px");
	$("index").on("tap",function(){

		if($('#height').val()!="" && $('#weight').val()!="" && temp==1){
			window.location.href = "maps.html";
			// $(".page1").css("display","none");
			// // $(".page2").css("visibility","visible");
			// $(".page2").css("display","block");
			// $(".page2").css("height","500px");
			// temp--;
		}
	});

	var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
      if (event.results.length > 0) {
        q.value = event.results[0][0].transcript;
        // q.form.submit();
      }
    }

	// var recognition = new webkitSpeechRecognition();
	// recognition.onresult = function(event) { 
	//   console.log(event) 
	// }
	// recognition.start(function() {
	// 	alert("here");
	// });

});