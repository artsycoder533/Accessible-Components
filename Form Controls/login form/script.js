const honeypotInput = document.getElementById("honeypot");
const form = document.querySelector(".login-form");
const loginBtn = document.getElementById("login");

//check if filled in, reset form
const checkForHoneypot = ()=>{
    if (honeypotInput) {
        form.reset();
    }
}


const validateForm = (e) => {
    e.preventDefault();
    checkForHoneypot();
}

login.addEventListener("click", validateForm);