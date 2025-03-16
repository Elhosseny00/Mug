let btn = document.querySelector(".btn");
let nav = document.querySelector("nav");
btn.addEventListener("click", () => {
  btn.classList.toggle("burger");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    btn.classList.remove("burger");
    nav.classList.remove("active");
  }
});
