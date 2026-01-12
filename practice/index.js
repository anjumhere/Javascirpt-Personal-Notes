// let head = document.querySelector(".heading");
// console.dir(head.innerText);

// head.innerText = head.innerText + " From ApnaCollege Students!"; // two strings are connected using concat method.

let divs = document.querySelectorAll(".box");
let idx = 1;
for (let div of divs) {
  div.innerText = `This is unique text ${idx}`;
  idx++;
}
