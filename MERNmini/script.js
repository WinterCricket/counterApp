const inputVal = document.querySelector("#inputVal");
const outputVal = document.querySelector("#outputVal");

inputVal.addEventListener("input", addToInput);

function addToInput() {
  if (inputVal.value) {
    outputVal.innerText = inputVal.value + " is watching!";
  } else {
    outputVal.innerText = "Enter your name";
  }
}
