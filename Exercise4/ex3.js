var red_val = 0;
var green_val = 0;
var blue_val = 0;
var width_val = 0;

var redBack_val = 0;
var greenBack_val = 0;
var blueBack_val = 0;

function colors() {
  var red_val = document.getElementById("red");
  var green_val = document.getElementById("green");
  var blue_val = document.getElementById("blue");
  var width_val = document.getElementById("width");

  var redBack_val = document.getElementById("redBack");
  var greenBack_val = document.getElementById("greenBack");
  var blueBack_val = document.getElementById("blueBack");

  p1.style.borderStyle = "solid";
  p1.style.borderWidth = width_val.value;

  p1.style.borderColor = "rgb(" + red_val.value + "," + green_val.value + "," + blue_val.value + ")";
  p1.style.backgroundColor = "rgb(" + redBack_val.value + "," + greenBack_val.value + "," + blueBack_val.value + ")"
}
