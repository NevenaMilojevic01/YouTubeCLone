const form = document.querySelector("#login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  validateForm();

  if (isFormValid() == true) {
    form.submit();
  } else {
    e.preventDefault();
  }
});

function isFormValid() {
  const inputContainers = form.querySelectorAll(".form_input_group");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  //USERNAME
  if (username.value.trim() == "") {
    setError(username, "You have to enter your username");
  } else if (username.value.trim().length < 7) {
    setError(username, "You have less than 7 characters");
  } else setSuccess(username);
  //PASSWORD
  if (password.value.trim() == "") {
    setError(password, "You have to enter your password");
  } else if (password.value.trim().length < 6) {
    setError(password, "You have less than 6 characters");
  } else setSuccess(password);
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}
