"use strict";

const parallaxTitle = document.querySelector(".parallax__title");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  parallaxTitle.style.top = 200 + scrollY * 1.2 + "px";
  leaf.style.top = scrollY * -1.5 + "px";
  hill1.style.top = scrollY * 0.6 + "px";
  hill4.style.left = scrollY * -1.5 + "px";
  hill5.style.left = scrollY * 1.5 + "px";
});
