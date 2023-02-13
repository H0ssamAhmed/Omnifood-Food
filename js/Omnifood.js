document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    window.scrollY >= 800
      ? header.classList.add("sticky-top")
      : window.scrollY < 800 && header.classList.remove("sticky-top");
  });
});
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
console.log("Hello world!");
const myName = "Hossam Ahmed";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
