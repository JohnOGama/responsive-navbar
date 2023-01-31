const btnEl = document.querySelector(".btn");
const sidebar = document.querySelector(".sidebar");
const closeEl = document.querySelector(".close-btn");

btnEl.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeEl.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
