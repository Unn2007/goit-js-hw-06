const loginForm = document.querySelector(".login-form");

function validationForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть будь-ласка усі поля!");
  } else {
    console.log({ [email.name]: email.value, [password.name]: password.value });
    event.currentTarget.reset();
  }
}
loginForm.addEventListener("submit", validationForm);
