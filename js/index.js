//init

let menu = document.querySelector("#menu-icon");
let form = document.querySelector("form");
let desc = document.querySelector("#desc");
let email = document.querySelector("#email");
let card = document.querySelectorAll(".card");
let navbar = document.querySelector(".navbar");

//listener
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  reset: false,
});

sr.reveal(".home-text", { delay: 200, origin: "top" });
sr.reveal(".home-img", { delay: 400, origin: "top" });
sr.reveal(".about, .services, .cta, .resume , .contact, .card, .copyright", {
  delay: 200,
  origin: "bottom",
});

//fun
