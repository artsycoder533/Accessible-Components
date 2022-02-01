const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("invalid", () => {
    nameInput.setCustomValidity("Please enter a name.");
});

emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity("Please enter a valid email.");
});