// Get the button:
let mybutton = document.getElementById("goLeftBtn");
let myArt=document.getElementById("mainGuide");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.myArt.scrollLeft > 70 || document.documentElement.scrollLeft > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function functionGoLeft() {
  document.myArt.scrollLeft = 0; // For Safari
  document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
} 