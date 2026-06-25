'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

function navToggleEvent(elements) {
  elements.forEach((element) => {
    if (element) {
      element.addEventListener("click", () => {
        navbar.classList.toggle("active");

        if (overlay) {
          overlay.classList.toggle("active");
        }
      });
    }
  });
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");
const goTopBtn = document.querySelector("[data-go-top]");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY === lastScrollY) return;

  lastScrollY = window.scrollY;

  const triggerPoint = hero.offsetHeight - header.offsetHeight;

  header.classList.toggle("active", window.scrollY > triggerPoint);

  if (goTopBtn) {
    goTopBtn.classList.toggle("active", window.scrollY > 300);
  }
});