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
  // create error message div
  let errorDiv = document.createElement("div");
  // initialize variable inputName for later use
  let inputName;
  // look for presence of el's previous sibling
  if (el.previousElementSibling !== null) {
    // inputName will equal inner text of previous sibling
    inputName = el.previousElementSibling.innerText;
    // if the previous sibling is null
  } else if (el.previousElementSibling === null) {
    inputName = el.placeholder;
  }
  errorDiv.innerText = inputName + " cannot be blank";
  el.parentElement.appendChild(errorDiv);
}

// for (let input of inputGroup) {
//   // inputName will equal el's placeholder text
//   inputName = input.placeholder;
//   console.log(inputName);
//   errorDiv.innerText = inputName + " cannot be blank";
//   el.after(errorDiv);
// }

// else if (
//   el.previousElementSibling === null &&
//   el.parentElement.querySelectorAll(".input-group")
// ) {
//   console.log("here");
//   inputName = el.placeholder;
//   console.log(inputName);
// }
// return errorDiv, inputName;
