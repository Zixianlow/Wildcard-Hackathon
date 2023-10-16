var password = document.getElementById("new-password")
  , confirm_password = document.getElementById("confirm-password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var slider = document.getElementById("phone456");
var output = document.getElementById("sliderValue");

// Update the initial display
output.innerHTML = slider.value;

// Add an event listener to update the display when the slider value changes
slider.addEventListener("input", function() {
  output.innerHTML = slider.value;
});