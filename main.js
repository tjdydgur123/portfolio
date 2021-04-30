"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar"); // get the element navbar
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // if scrolling is larger than the navbar height
  if (window.scrollY > navbarHeight) {
    // add class -> check the dev tool
    navbar.classList.add("navbar--dark");
  } else {
    // remove class
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
