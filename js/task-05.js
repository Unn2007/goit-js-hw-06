const inputName = document.querySelector("#name-input");
const nameoutput = document.querySelector("#name-output");
const nameEnter = (event) => {
  if (event.currentTarget.value.length !== 0) {
    nameoutput.textContent = event.currentTarget.value;
  } else {
    nameoutput.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", nameEnter);
