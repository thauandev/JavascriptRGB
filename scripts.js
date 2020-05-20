var r = 0;
var g = 0;
var b = 0;

window.addEventListener("load", start);

function start() {
  var background = document.querySelector(".div4");

  background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  preventFormSubmit();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

var rangeRed = document.querySelector("#inputVermelho");
rangeRed.addEventListener("change", handleRed);

var rangeGreen = document.querySelector("#inputVerde");
rangeGreen.addEventListener("change", handleGreen);

var rangeBlue = document.querySelector("#inputAzul");
rangeBlue.addEventListener("change", handleBlue);

function handleRed(event) {
  r = event.target.value;
  textRed = document.querySelector("#textVermelho");

  textRed.value = r;
  var background = document.querySelector(".div4");

  background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function handleGreen(event) {
  g = event.target.value;
  textGreen = document.querySelector("#textVerde");

  textGreen.value = g;
  var background = document.querySelector(".div4");

  background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function handleBlue(event) {
  b = event.target.value;
  textBlue = document.querySelector("#textAzul");

  textBlue.value = b;
  var background = document.querySelector(".div4");

  background.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
