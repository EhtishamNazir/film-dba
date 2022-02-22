// SignIn SignUp Modal Script is here

// Get the modal
var modal = document.getElementById("signinModal");

// Get the button that opens the modal
var btn = document.getElementById("signInBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function hideInShowUp() {
    document.getElementById('signIn').style.display = "none";
    document.getElementById('signUp').style.display = "flex";
}
function hideUpShowIn() {
    document.getElementById('signIn').style.display = "flex";
    document.getElementById('signUp').style.display = "none";
}


// Map Popup Styles
// Get the map modal
var mapmodal = document.getElementById("mapPopup");

// Get the button that opens the modal
var mapbtn = document.getElementById("mapBtn");

// Get the <span> element that closes the modal
var mapspan = document.getElementsByClassName("map-close")[0];

// When the user clicks on the button, open the modal
mapbtn.onclick = function() {
  mapmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
mapspan.onclick = function() {
  mapmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mapmodal) {
    mapmodal.style.display = "none";
  }
}
