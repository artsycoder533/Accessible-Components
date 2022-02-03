const hamburgerBtn = document.getElementById("hamburger");
const hamburgerLine = document.querySelector(".hamburger-line");

const toggleNavMenu = () => {
    if (hamburgerBtn.getAttribute("aria-expanded") === "false") {
        hamburgerBtn.setAttribute("aria-expanded", "true");
    }
    else {
        hamburgerBtn.setAttribute("aria-expanded", "false");
    }
    hamburgerLine.classList.toggle("rotate");
}

hamburgerBtn.addEventListener("click", toggleNavMenu);