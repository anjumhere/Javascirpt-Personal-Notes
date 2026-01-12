// ---- Events in js --------
// Node.event = () =>{
//     //handle here
// }

// if an event is being handles in two places like html and js , the one in the javascript will run.
// if an even is handles once it will not be handles again because the code will be overwritten.

// let click = document.querySelector("button");
// let not = (click.onclick = "You clicked the button");
// console.log(not);

// let click = document.querySelector(".btn");
// click.onclick = () => {
//   click.style.backgroundColor = "red";
// };

// click.ondblclick = () => {
//   click.style.backgroundColor = "green";
// };

// let cs = document.querySelector(".btn");
// cs.onclick = () => {
//   console.log("Button was clicked");
//   let a = 2;
//   a++;
//   console.log(a);
// };

/*
----------- EVENT OBJECT -----
It is a special object that has details about the event.
All events handlers have access to the event Objects' properties and methods.
In this way we can get additional information about the event.


node.event= (e) => {
    //handle here

}

e.target, e.type, e.clientX , e.clientY

 */

// let cs = document.querySelector(".btn");
// cs.onclick = (evt) => {
//   console.log("Button was clicked");
//   console.log(evt); // this one gives all the details and properties about the event
//   console.log(evt.type); // this one tells us about the type of event we are using
//   console.log(evt.target); // this one tells about where the event is targetting.
//   console.log(evt.clientX, evt.clientY); // this one gives the exact coordinate of the event being fired.
// };

// let btn = document.querySelector(".btn");
// let body = document.querySelector("body");
// let isDark = false;
// btn.addEventListener("click", () => {
//   if (isDark) {
//     body.style.backgroundColor = "purple";
//     body.style.color = "white";
//     isDark = false;
//   } else {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     isDark = true;
//   }
//   btn.style.cursor = "pointer";
// });

// const btn = document.querySelector(".btn");
// const body = document.querySelector("body");

// let isDark = false;
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log("hello");
// });
// btn.addEventListener("click", () => {
//   console.log("hello--1");
// });
// const handler2 = () => {
//   console.log("button was clicked");
// };
// btn.addEventListener("click", handler2);
// btn.addEventListener("click", () => {
//   console.log("hello--3");
// });

// btn.removeEventListener("click", handler2);

let btn = document.querySelector(".btn");
console.log(btn);
let body = document.querySelector("body");
let currMode = "light";
btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
  } else {
    // currMode = "dark";
    body.classList.add("light");
    currMode = "light";
  }
  console.log(currMode);
});
