const toggleNavBtn = document.getElementById("toggle-nav-btn");
const nav = document.getElementById("nav");

toggleNavBtn.addEventListener("click", function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
