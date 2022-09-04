let span = document.querySelector("ul span");
let nav = document.querySelector("ul li");
let btn = document.querySelector(".buton");
let clip = document.querySelector(".clip");
nav.addEventListener("click", function () {
  span.style.display = "inline";
});

window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
};
