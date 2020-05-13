(function ($) {
  "use strict";

  /**
   * 
   */
  $(document).ready(function(){
    mediaDevices();
    object1();
  });

  /**
   * 
   */
  $(document).on("click", function (e) {
    let target = e.target;
    // initObject();
  });

  /**
   * 
   */
  function object1() {
    $('div').click(function(){
      $(this).toggleClass('fx1');
    })
  }

  /**
   * 
   */
  function initObject(){
    $("body").append(`<div class="a">A</div>`);
  }

  /**
   * 
   */
  function mediaDevices(){

    // Grab elements, create settings, etc.
    var video = document.getElementById("video");
    
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices
      .getUserMedia({ video: true }, function (stream) {
        if (
          stream.getVideoTracks().length > 0 &&
          stream.getAudioTracks().length > 0
          ) {
            //code for when none of the devices are available
        } else {
          // code for when both devices are available
        }
      })
      .then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
      });
    }
    
    // Elements for taking the snapshot
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var video = document.getElementById("video");

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function () {
      context.drawImage(video, 0, 0, 640, 480);
    });
  } 

})(jQuery);
  