// let btn = document.querySelector(".btn");
// let body = document.querySelector("body");
// let isDark = false;
// btn.addEventListener("click", () => {
//   if (isDark) {
//     body.classList.remove("dark");
//     body.classList.add("light");
//     isDark = false;
//   } else {
//     body.classList.remove("light");
//     body.classList.add("dark");
//     isDark = true;
//   }
// });
let btn = document.querySelector(".btn");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
