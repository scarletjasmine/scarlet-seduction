/**addEventListener("click", event => {
    const video = document.getElementById('seduction-video');
    if (video.requestFullscreen) 
        video.requestFullscreen();
    else if (video.webkitRequestFullscreen) 
        video.webkitRequestFullscreen();
    else if (video.msRequestFullScreen) 
      video.msRequestFullScreen();
});*/

function fadeOut(element, duration) {
    var start = new Date().getTime();
    var opacity = 1;

    var interval = setInterval(function() {
        var now = new Date().getTime();
        var elapsed = now - start;
        var ratio = elapsed / duration;

        if(ratio >= 1) {
            element.style.opacity = 0;
            clearInterval(interval);
        } else {
            opacity = 1 - ratio;
            element.style.opacity = opacity;
        }
    }, 10);
}

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('tty');
    fadeOut(element, 10000);
});

$(document).ready(function() {
  // Initial fade-in
    
  $("#sb-bg").css('z-index', 1020);
  $("#sb-bg").css('opacity', 1);
  

    setTimeout(function() {
      // Code to be executed after the 
        $("#sb-bg").css('z-index', 1020);
        $("#sb-bg").css('opacity', 1);
        $('#main').fadeOut();
        $('.centered-div').fadeIn(function(){
            
        },3000);
    }, 10000); // Delay of 2000 milliseconds (2 seconds)
    

    
});
