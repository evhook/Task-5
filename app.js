const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-area");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function isValidEmail(email) {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear errors

  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset(); // Clear the form
  }
});
setInterval(() => {
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
}, 1500);
setInterval(() => {
  successMessage.textContent = "";
}, 3000);
