// scroll header if scroll >30 then change background
const headerChange = document.querySelector(".header");
const changeColora = document.querySelectorAll(".header__menu-nav li a");
const changeImg = document.querySelector(".header__menu-icon img");
const changeIcon = document.querySelector(".header__menu-nav-btn i");
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerChange.style.backgroundColor = "#fff";
    headerChange.style.borderBottom = "2px solid black";
    changeImg.style.backgroundColor = "blue";
    changeIcon.style.color = "black";
    for (let i = 0; i < changeColora.length; i++) {
      changeColora[i].style.color = "black";
    }
  } else {
    headerChange.style.backgroundColor = "#151726";
    changeImg.style.backgroundColor = "";
    changeIcon.style.color = "white";
    for (let i = 0; i < changeColora.length; i++) {
      changeColora[i].style.color = "white";
    }
  }
}
