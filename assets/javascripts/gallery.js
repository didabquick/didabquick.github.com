$(document).ready(function() {
  $("#gallery a").fancybox({"transitionIn" : "fade", "transitionOut" : "fade"});
  
  // Every second, start a new element a'rumblin
  setInterval(startRumblin, 500);
});

function startRumblin() {
  // Pick a random photo from the gallery
  var randomSelection = Math.floor((Math.random()*8)+1);
  var photo = $(".photo" + randomSelection).parent();
  
  // We'll stop the rumbling after 1-3 seconds
  var randomTimeout = Math.floor(Math.random()*4000) + 1000;
  
  // Set random rumbling parameters
  var x = Math.floor(Math.random() * 3) + 1;
  var y = Math.floor(Math.random() * 3) + 1;
  var rotation = Math.floor(Math.random() * 3) + 1;
  var speed = Math.floor(Math.random()*135) + 40; // Higher is slow
  
  photo.jrumble({
    "speed" : speed,
    "x" : x,
    "y" : y,
    "rotation" : rotation
  });
  photo.trigger("startRumble");
  
  setTimeout(function() {stopRumblin(photo);}, randomTimeout);
}

function stopRumblin(photo) {
  photo.trigger("stopRumble");
}

