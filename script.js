let formIsValid = true;
let inputsAll = document.querySelectorAll("input");
let form = document.querySelector("#parking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkEmpty(); //we need to check each input to see if it's empty
});

//HELPER FUNCTIONS//
function markValid() {
  formIsValid = true;
}
function markInvalid() {
  //   formIsValid = false;
}

//validation functions//
function checkEmpty() {
  for (let input of inputsAll) {
    if (input.value === "") {
      markInvalid();
    }
  }
}
