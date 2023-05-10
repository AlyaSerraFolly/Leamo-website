const toggleNavBtn = document.getElementById("toggle-nav-btn");
const nav = document.getElementById("nav");

toggleNavBtn.addEventListener("click", function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    disableOnInteraction: true,
    delay: 4000,
  },
});
