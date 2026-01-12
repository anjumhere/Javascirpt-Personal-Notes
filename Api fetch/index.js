/*
fetch API

API stands for Application Programming Interface

The fetch API provides an interface for fetching (sending/receiving) resources.

It uses Requests and Response Objects

The fetch() method is used to fetch a resource (data).

syntax----

let promise = fetch(url, [options])

*/
const btn = document.querySelector(".btn");
const para = document.querySelector(".para");
const URL = "  https://meowfacts.herokuapp.com/";
console.log("Fetching data");
const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response.status);
  let data = await response.json();
  console.log("data = ", data);
  para.innerText = data.data[0];
};
btn.addEventListener("click", getFacts);
