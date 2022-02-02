const honeypotInput = document.getElementById("honeypot");
const loginBtn = document.getElementById("login");
const showBtn = document.getElementById("show");
const passwordInput = document.getElementById("password");
const passwordStatus = document.getElementById("password-status");
const usernameInput = document.getElementById("username");
const form = document.loginForm;

//check if filled in, reset form
const checkForHoneypot = () => {
  if (honeypotInput.value) {
    console.log("honeypot filled in");
    form.reset();
    return true;
  } else {
    return false;
  }
};

const toggleShowBtn = () => {
  if (showBtn.innerText === "SHOW") {
    showBtn.innerText = "HIDE";
    passwordInput.type = "text";
    passwordStatus.textContent = "Your password is shown";
  } else {
    showBtn.innerText = "SHOW";
    passwordInput.type = "password";
    passwordStatus.textContent = "Your password is hidden";
  }
};

//changes password input type back to text so autocomplete wont save password as text
const hidePassword = () => {
  passwordInput.type = "password";
  showBtn.innerText = "SHOW";
};

const validateForm = (e) => {
  //if form passes default checks
  if (form.checkValidity()) {
    //run custom validation
    console.log("form passes");
    hidePassword();
  }
  //form is invalid
  else {
    e.preventDefault();
    console.log("form fails");
    // checkUsernameInput();
    // checkPasswordInput();
  }
};

const checkPasswordInput = (e) => {
    console.log(e.target);
  //clear previous error message
  passwordInput.setCustomValidity("");
  let isValid = passwordInput.checkValidity();
  console.log("password", isValid);
  //if browser test passes, do additional tests
//   if (isValid) {
//     console.log("invalid password");
//     passwordInput.setCustomValidity(
//       "Password must be between 8 and 15 characters in check password"
//     );
//     passwordInput.reportValidity();
//   }
};

const checkUsernameInput = (e) => {
  usernameInput.setCustomValidity("");
  let isValid = usernameInput.checkValidity();
  console.log(isValid === false);
  //if browser test passes, do additional tests
  if (isValid === false) {
    //check for username with excess spaces
      const regex = new RegExp(/[\s]/g);
      console.log(regex.test(usernameInput.value.trim()));
      //if true its a match for preceding spaces in username
      if (usernameInput.value.trim().match(regex)) {
          console.log("space found");
      usernameInput.setCustomValidity("Username must not contain spaces");
      usernameInput.reportValidity(); //show custom or built in message
    }
  }
};

const checkForInvalidInput = (e) => {
    console.log("invalid");
    console.log(ValidityState);
  const input = e.target;
    //input.setCustomValidity("");
    //custom default error messages
  switch (input.id) {
      case "username":
          usernameInput.setCustomValidity("");
          usernameInput.setCustomValidity("Username cannot be blank");
          usernameInput.classList.add(":invalid");
      //usernameInput.reportValidity();
      break;
      case "password":
          passwordInput.setCustomValidity("");
      passwordInput.setCustomValidity(
        "Password must be between 8 and 15 characters"
      );
      //passwordInput.reportValidity();
      break;
    default:
      break;
  }
};

//loginBtn.addEventListener("click", validateForm);
showBtn.addEventListener("click", toggleShowBtn);
usernameInput.addEventListener("blur", checkUsernameInput);
passwordInput.addEventListener("blur", checkPasswordInput);
passwordInput.addEventListener("invalid", checkForInvalidInput);
usernameInput.addEventListener("invalid", checkForInvalidInput);
form.addEventListener("submit", validateForm);
