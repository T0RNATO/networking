var images = document.getElementsByTagName('img');
var i;
var count = 0;
for (i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(){spin()});
}
function spin() {
  count = count + 360;
  for (i = 0; i < images.length; i++) {
    images[i].style.transform = "rotate(" + count + "deg)"
  }
}
