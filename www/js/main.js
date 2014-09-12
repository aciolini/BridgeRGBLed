$(document).ready(function () {

  var $PurpleBtn = $("#Purple");
  var $AquaBtn = $("#Aqua");
  var $BlueBtn = $("#Blue");
  var $GreenBtn = $("#Green");
  var $RedBtn = $("#Red");
;

  // POST data needs to be included in the url string since bridge
  // does not currently parse the request body for data
  function setRGBlight(r, g, b) {
    var request = $.ajax({
      type: "POST",
      url:"/arduino/changeRGB/" + r + "." + g + "." + b + "."
    });

    request.done(function (msg) {
      console.log(msg);
    });

    request.fail(function (jqXHR, textStatus) {
      console.log("Request failed: " + textStatus);
    });
  }

  $PurpleBtn.on('click', function (e) {
    setRGBlight(80, 0, 80);
  });

  $AquaBtn.on('click', function (e) {
    setRGBlight(0, 255, 255);
  });
  
  $BlueBtn.on('click', function (e) {
    setRGBlight(0, 0, 255);
  });
  
  $GreenBtn.on('click', function (e) {
    setRGBlight(0, 255, 0);
  });
    
  $RedBtn.on('click', function (e) {
    setRGBlight(255, 0, 0);
  });
  
});