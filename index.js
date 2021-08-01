var x = true;
$('#first-button').click(function () {
   x = true
   $('#first-button').addClass("bgBlue");
   $('#second-button').removeClass("bgBlue");
})

$('#second-button').click(function () {
   x = false
   $('#second-button').addClass("bgBlue");
   $('#first-button').removeClass("bgBlue");
})


function hexFromRGB(r, g, b) {
   var hex = [
      r.toString(16),
      g.toString(16),
      b.toString(16)
   ];
   $.each(hex, function (nr, val) {
      if (val.length === 1) {
         hex[nr] = "0" + val;
      }
   });
   return hex.join("").toUpperCase();
}
function refreshSwatch() {
   var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
   if (x) {
      $("#swatch").css("background-color", "#" + hex);
      $('#first-button').addClass("bgBlue");
      $('#second-button').removeClass("bgBlue");
   }
   else {
      $("#swatch").css("color", "#" + hex);
   }

}


$(function () {
   $("#red, #green, #blue").slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
   });
   $("#red").slider("value", 255);
   $("#green").slider("value", 140);
   $("#blue").slider("value", 60);
});
