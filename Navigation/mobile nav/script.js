const hamburgerBtn = document.getElementById("hamburger");

const toggleNavMenu = () => {
    if (hamburgerBtn.getAttribute("aria-expanded") === false) {
        hamburgerBtn.setAttribute("aria-expanded", true);
    }
    else {
        hamburgerBtn.setAttribute("aria-expanded", false);
    }
    
}

hamburgerBtn.addEventListener("click", toggleNavMenu);