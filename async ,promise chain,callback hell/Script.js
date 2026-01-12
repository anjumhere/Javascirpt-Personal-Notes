/*
Syncronous

Synchronous mean the code runs in a particular sequence of instructions given
in the program. EAch instruction waits for the previous instruction to complete its execution.

console.log("one")
console.log("two")
console.log("three")

output = 1 => 2 => 3

it executes each instruction one by one.

Asynchronous 
Due to the synchronous programming , sometimes important instructions
get blocked due to previous instructions, which causes a delay in the UI.
Asynchronous code execution aloows to execute next instructions
immediately and doesn't block the flow.


e.g
console.log("one")
console.log("two")
setTimeout(() => {
  console.log("hello");
}, 5000);

console.log("three")
console.log("four")
console.log("five")

output: one => two =>here comes the hello, it will execute after 5 but it wono't block the flow of code , it wil execute when it is complete, in this way it doesn't blocks other instructions.  three => four => five  

/*
A calback is a function passed as an argument to another function
*/

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 4, sum);

// let add = (a, b) => {
//   console.log(a + b);
// };

// setTimeout(() => add(3, 6), 4000);

// let hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 3000);

// function getData(data1, data2) {
//   setTimeout(() => {
//     console.log("Loading ==> ", data1);
//     if (data2) {
//       data2();
//     }
//   }, 2000);
// }
// getData("10%", () => {
//   // console.log("Game loading---->");
//   getData("50%", () => {
//     // console.log("Gaming loading ---->");
//     getData("75%", () => {
//       // console.log("Game loading  ---->");
//       getData("100%", () => {
//         console.log("Click any button to continue!");
//       });
//     });
//   });
// });

/*
 promises
 promise is for "eventual" completion of task. It is an object in js.
 it is a solution to callback hell.

 styntax.

 let promise = new promise((resolve, reject)=>{
  })

  */
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("some error occured");
// });

// function getData(data1, data2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let rest = `Data =  ${data1}`;
//       para.innerHTML = rest;
//       console.log(rest);
//       resolve("success");
//       if (data2) {
//         data2();
//       }
//     }, 3000);
//   });
// }

// let para = document.querySelector(".para");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   for (let i = 0; i <= 1600; i++) {
//     let result = getData(i);
//   }
// });

// function getData(data1, data2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data = ", data1);
//       resolve("success");
//     }, 2000);
//   });
// }

// function getPromise() {
//   return new Promise((resolve, reject) => {
//     console.log("Checking");
//     resolve("Successfully");
//     // reject("Error occured");
//   });
// }

let promise = getPromise();
promise.then((res) => {
  console.log("Handled: ", res);
});
promise.catch((err) => {
  console.log("Rejected :", err);
});

function getData(data1, data2) {
  setTimeout(() => {
    console.log("Loading ==> ", data1);
    if (data2) {
      data2();
    }
  }, 2000);
}

// promise chain

// function asyncFun(data1) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data  = ", data1);
//       resolve("Successful");
//     }, 3000);
//   });
// }

// function asyncFun2(data2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data = ", data2);
//       resolve("Successful");
//     }, 3000);
//   });
// }

// console.log("Fetching data 1-----");

// asyncFun(1)
//   .then((res) => {
//     return asyncFun2(2);
//   })
//   .then((res) => {
//     return asyncFun(3);
//   })
//   .then((res) => {
//     return asyncFun(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }
// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
//   await getData(5);
// }
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");
console.log(para);
console.log(btn);
///  async - await
function wait(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("data", data);
      para.innerHTML = `Data = ${data}`;

      resolve("success");
    }, 500);
  });
}
// IIFE is immediataly invoked function expression and it runs the code as soon as it is defined.
btn.addEventListener("click", () => {
  (async function getData() {
    await wait(1);
    await wait(2);
    await wait(3);
    await wait(4);
    await wait(5);
  })();
});

let name = kamran;
function kamran() {
  console.log("hello kamran");
}

let arrow = () => {
  let name = 34243;
  kamran();
};
