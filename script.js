// Variables
let formIsValid;
let inputs = document.querySelectorAll("input");
let form = document.querySelector("#parking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  isInputValid();
});

//HELPER FUNCTIONS//
function markValid() {
  return (formIsValid = true);
}
function markInvalid() {
  return (formIsValid = false);
}

//validation functions//
function checkValue(el) {
  return el.value.trim() === "";
}

function isInputValid() {
  for (let input of inputs) {
    if (checkValue(input)) {
      input.closest(".input-field").classList.add("input-invalid");
      showError(input);
      markInvalid();
    } else if (!checkValue(input)) {
      input.closest(".input-field").classList.add("input-valid");
      markValid();
    }
  }
}

function showError(el) {
  let errorDiv = document.createElement("div");
  errorDiv.innerText = "cannot be blank";
  el.parentElement.appendChild(errorDiv);
}
