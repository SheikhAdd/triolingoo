$(document).ready(function(){
  $("#your-link-id").click(function(){
    $("#myAudio")[0].play(); // Play the audio
  });

  $(".flex-item").click(function(){
    $(this).toggleClass("highlighted"); // Toggle the highlighted class on click
  });
});