document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navWrapper = document.getElementById("nav-wrapper");

  hamburger.addEventListener("click", () => {
    navWrapper.classList.toggle("show");
  });
});
