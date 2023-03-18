const validationInput = document.querySelector("#validation-input");

const inspectInput = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(validationInput.getAttribute("data-length"))
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};
validationInput.addEventListener("blur", inspectInput);
