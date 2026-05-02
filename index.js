console.log("JS loaded once");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const form = document.getElementById("contact-form");

const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const messageInput = document.getElementById("contact-message");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

function validateName() {
  let name = nameInput.value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "kindly enter your name";
    return false;
  }

  if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
    nameError.innerHTML = "Enter your first and last name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateEmail() {
  let email = emailInput.value.trim();

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Enter a valid Email address";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateMessage() {
  let message = messageInput.value.trim();
  let textRequired = 30;
  let textLeft = textRequired - message.length;

  if (textLeft > 0) {
    messageError.innerHTML = `${textLeft} more characters left`;
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = "inline-block";
    submitError.innerHTML = "Please fix the errors above";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 1000);
    return;
  }
  form.submit();
});
