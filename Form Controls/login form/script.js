const honeypotInput = document.getElementById("honeypot");
const form = document.querySelector(".login-form");
const loginBtn = document.getElementById("login");
const showBtn = document.getElementById("show");
const passwordInput = document.getElementById("password");

//check if filled in, reset form
const checkForHoneypot = () => {
    if (honeypotInput) {
        form.reset();
    }
}

const validateForm = (e) => {
    e.preventDefault();
    checkForHoneypot();
}

const toggleShowBtn = () => {
    if (showBtn.innerText === "SHOW") {
        showBtn.innerText = "HIDE";
        passwordInput.type = "text";
    }
    else {
        showBtn.innerText = "SHOW";
        passwordInput.type = "password";
    }
}

loginBtn.addEventListener("click", validateForm);
showBtn.addEventListener("click", toggleShowBtn);