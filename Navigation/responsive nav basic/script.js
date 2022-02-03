const hamburgerBtn = document.getElementById("hamburger");
const hamburgerLine = document.querySelector(".hamburger-line");
const navLinks = document.getElementById("navLinks");
const navLink = document.querySelectorAll(".nav-link");

const toggleNavigation = () => {
    hamburgerBtn.getAttribute("aria-expanded") === "false" ? hamburgerBtn.setAttribute("aria-expanded", "true") : hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.getAttribute("aria-label") === "Open Navigation Menu" ? hamburgerBtn.setAttribute("aria-label", "Close Navigation Menu") : hamburgerBtn.setAttribute("aria-label", "Open Navigation Menu");
    hamburgerLine.classList.toggle("rotate");
    navLinks.classList.toggle("show-menu");
}

hamburgerBtn.addEventListener("click", toggleNavigation);
hamburgerBtn.addEventListener("keyup", (e) => {
    //if enter key pressed
    if (e.key === 13) {
      e.preventDefault();
      hamburgerBtn.click();
      //add focus to first menu item
      navLink[0].focus();
    }

    //if spacebar pressed
    else if (e.key === 32) {
      e.preventDefault();
      hamburgerBtn.click();
      //add focus to first menu item
      navLink[0].focus();
    }

    //if down arrow pressed
    else if (e.key === 40) {
      e.preventDefault();
      hamburgerBtn.click();
      //add focus to last menu item
      navLink[0].focus();
    }

    //if up arrow pressed
    else if (e.key === 40) {
      e.preventDefault();
      hamburgerBtn.click();
      //add focus to last menu item
      navLink[navLink.length - 1].focus();
    }
});