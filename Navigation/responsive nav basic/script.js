const hamburgerBtn = document.getElementById("hamburger");
const hamburgerLine = document.querySelector(".hamburger-line");
const navLinks = document.getElementById("navLinks");
// const navLink = document.querySelectorAll(".tab");
const navLink = document.querySelectorAll("*");
let position = 0;

const toggleNavigation = () => {
  if (hamburgerBtn.getAttribute("aria-expanded") === "false") {
    hamburgerBtn.setAttribute("aria-expanded", "true");
    hamburgerBtn.setAttribute("aria-label", "Close Navigation Menu");
    removeTabIndexFromFlow();
    document.addEventListener("keydown", moveFocus);
  }
  else if (hamburgerBtn.getAttribute("aria-expanded") === "true") {
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.setAttribute("aria-label", "Open Navigation Menu");
    document.removeEventListener("keydown", moveFocus);
    AddTabIndexFromFlow();

  }

    hamburgerLine.classList.toggle("rotate");
    navLinks.classList.toggle("show-menu");
    
  //change tab-index to -1 for all links except for first
 
  
}

const addLinkEvents = () => {
  navLink.forEach(link => {
    document.addEventListener("onkeydown", moveFocus);
  });
}

const moveFocus = (e) => {
  console.log(e);
  switch (e.key) {
    //tab
    case 'Tab':
      console.log("tab pressed", e.currentTarget);
      navLinks.focus();
      //changeTabIndex();
      break;
    //down arrow
    case 'DownArrow':
      console.log("down arrow pressed");
      changeTabIndex();
      break;
      //get element with tab index of 0
      //change tab index to zero of next item below it
      //change tab index of previous element to -1
    //up arrow
    case 'UpArrow':
      console.log("up arrow pressed");
      break;
    //esc
    case 'Escape':
      console.log("esc pressed");
      hamburgerBtn.click();
      break;
    default:
      return;
  }
}

const changeTabIndex = () => {
  navLink.forEach((link, index) => {
    if (link.getAttribute("tab-index") === "0") {
      link.focus();
      //if theres another link
      if (link.nextElementSibling) {
        link.nextElementSibling.setAttribute("tab-index", "0");
        link.setAttribute("tab-index", "-1");
      }
      //if last link, go back to first link
      else {
        navLink[0].focus();
        navLink[0].setAttribute("tab-index", "0");
        navLink[navLink.length - 1].setAttribute("tab-index", "-1");
      }
    }
  });
}

//change tab index of nav links to -1
const removeTabIndexFromFlow = () => {
  navLink.forEach((link, index) => {
 
      link.setAttribute("tab-index", "-1");
    
 
  });
}

//add tab index back to normal flow
const AddTabIndexFromFlow = () => {
  navLink.forEach((link, index) => {
    if (index > 0) {
      link.setAttribute("tab-index", "0");
    }
  });
};

hamburgerBtn.addEventListener("click", toggleNavigation);
