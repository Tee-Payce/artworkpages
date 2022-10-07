var navLinks = document.getElementById("navLinks");

function showMenu(){
   navLinks.style.right = "0";
}
function hideMenu(){
  navLinks.style.right = "-200px";
}

/*
----------------------------------
*-calculate the document height and set the offset to a quarter of that value
*- sdd event listeners for scroll and onclick
----------------------------------
*/
var btt = document.getElementByClassName("topbtn"),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight;

//calculate height
docHeight = Math-max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight):
if (docHeight!="undefined") {
  offset = docHeight/4;
}
//add scroll event listener
window.addEventListener("scroll", function(event){

if (scrollPos!=offset) {
  btt.style.opacity = 1;
}
else {
  btt.style.opacity = 0;
}
});
