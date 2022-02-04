const hamburgerBtn = document.getElementById("hamburger");
const hamburgerLine = document.querySelector(".hamburger-line");
const navLinks = document.getElementById("navLinks");
const navLink = document.querySelectorAll(".nav-link");
let position = 0;

const toggleNavigation = () => {
    hamburgerBtn.getAttribute("aria-expanded") === "false" ? hamburgerBtn.setAttribute("aria-expanded", "true") : hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.getAttribute("aria-label") === "Open Navigation Menu" ? hamburgerBtn.setAttribute("aria-label", "Close Navigation Menu") : hamburgerBtn.setAttribute("aria-label", "Open Navigation Menu");
    hamburgerLine.classList.toggle("rotate");
    navLinks.classList.toggle("show-menu");
    
  //change tab-index to -1 for all links except for first
  navLink.forEach((link, index) => {
    if (index > 0) {
      link.setAttribute("tab-index", "-1");
    }
  });
}

const focusNavLink = (e) => {
//if hamburger is expanded,
  //go thru all nav links and add focus
  //once index length is reached add focus back to hamburger button?
  console.log(e.key);

    //if down arrow pressed
  if (e.key === "ArrowDown") {

  }
}

hamburgerBtn.addEventListener("click", toggleNavigation);
hamburgerBtn.addEventListener("keyup", focusNavLink);