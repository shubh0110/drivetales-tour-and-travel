'use strict';

const overlay     = document.querySelector("[data-overlay]");
const navOpenBtn  = document.querySelector("[data-nav-open-btn]");
const navbar      = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks    = document.querySelectorAll("[data-nav-link]");

function openNav() {
  navbar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("nav-open");
}

function closeNav() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-open");
}

navOpenBtn.addEventListener("click", openNav);
navCloseBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
navLinks.forEach(link => link.addEventListener("click", closeNav));


/**
 * header sticky & go to top
 */

const header   = document.querySelector("[data-header]");
const hero     = document.querySelector(".hero");
const goTopBtn = document.querySelector("[data-go-top]");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY === lastScrollY) return;
  lastScrollY = window.scrollY;

  const triggerPoint = hero
    ? hero.offsetHeight - header.offsetHeight
    : 80;

  header.classList.toggle("active", window.scrollY > triggerPoint);

  if (goTopBtn) {
    goTopBtn.classList.toggle("active", window.scrollY > 300);
  }
});