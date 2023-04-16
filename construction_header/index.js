let SearchForm = document.querySelector("header .SearchForm");
let LoginForm = document.querySelector("header .LoginForm");
let Information = document.querySelector("header .InformationMain");
let Navbar = document.querySelector("header .navbar");

// For Navbar
document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
  SearchForm.classList.remove("active");
  LoginForm.classList.remove("active");
};

// For Search box
document.querySelector("#SearchBtn").onclick = () => {
  SearchForm.classList.toggle("active");
  LoginForm.classList.remove("active");
  Navbar.classList.remove("active");
};

// For Login Form
document.querySelector("#LoginBtn").onclick = () => {
  LoginForm.classList.toggle("active");
  SearchForm.classList.remove("active");
  Navbar.classList.remove("active");
};

// For Information
document.querySelector("#InformationBtn").onclick = () => {
  Information.classList.add("active");
};
document.querySelector("#InformationClose").onclick = () => {
  Information.classList.remove("active");
};

// Home Slider
var swiper = new Swiper(".homeSlider", {
  loop: true,
  grabCursor: true,
});
