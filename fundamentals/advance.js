// Functions ----- 3/dec/2025----------->>>> Block of code that performs a specific task , can be invoked whenever needed.
/*
      function    functionName()
         |               |
    function keyword  function name
    { 
      // do some work 
      
} 
      like this we can first we write the keyword for function then we name the function.
      
      After making the function we can recall the function later.
      The recalling of function is known as revoking.
      */

function myFunction() {
  console.log("I love programming");
}

// recalling ---> revoking
myFunction();

/*

function functionName(Parameter1, param2){

// all work goes here

}

*/

//--------------------------------------------

/*
function sum1(x, y ){
    // these x,y will act as local variables -> block scoped variables.
console.log(x+y)
console.log(x)

}
sum1(21312,5345)

function sum(a,b){
let res = a+b;
return res;
}
let result = sum(3432,54353);
console.log(result)

*/

// Arrow functions => A compact way of writing a function.

/*
const mul=(a,b)=>{
return a*b;
}

const muls= (c,d) => c+d;

*/

/*
function countVowel(str){
      count = 0;
      for(const char of str){
            if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                  count++;
            }
      }
      console.log(count)
}

countVowel("my name is adnan anjum i belong to ghizer , i am a programmer")

*/

// ------ day 2 ------ 3 / dec/ 2025

/// Qs Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string

/*
function vowelCount(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "0" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
vowelCount("saturogojo");

// similar function using arrow function

const vowelsCount = (str1) => {
  let count1 = 0;
  for (let chars of str1) {
    if (
      chars === "a" ||
      chars === "e" ||
      chars === "i" ||
      chars === "0" ||
      chars === "u"
    ) {
      count1++;
    }
  }
  console.log(count1);
};
vowelsCount("vowelscountingusingarrowfunction");

*/

// forEach loop in Arrays.
// arr.forEach(callBackFunction)
// callBackFunction : Here, it is a function to execute for each element in the array.
// A callBack is a function passed as an argument to another function.

// let arr = ["hey", "hello", "where", "what ", "name", "hello"];
// // arr.forEach(function printVal(val,  ) { // each value at each index.
// //   console.log(val);
// // });
// arr.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase, idx, arr);
//       });
// // we usually write an forEach() function in the form of arrow function.
// // in the call back functin of forEach , we have three parameters , first one is parameter , second one is index and the third one is array itself.

// let arr = ["name", "hello", "kamran", "akmal", "ali"];
// arr.forEach((val) => {
//   console.log(val);
// });

// Q2 => For a given array of numbers. print the square of each value using the forEach loop.

// let arr = [3, 2, 5, 6, 7, 8];
// // // arr.forEach((sq) => {
// // //   let res = sq * sq;
// // //   console.log(res);
// // // });

// const calSq = (val) => {
//   let res1 = val * val;
//   console.log(res1);
// };
// // arr.forEach(calSq);

// map() function method is just a forEach loop for array , the difference is that it is used to create a new array with the result of some operation. The its callback return are to form a new array.

// let arr = [23, 5, 23, 1, 6, 7];
// let totalResult = arr.map((val) => {
//   let result = val * val;
//   return result;
// });
// console.log(totalResult);

// filter(), method creates a new array of elements that give true for condition/filter.
// Eg. all even elements.
/* syntax..... let newArr= arr.filter((val)=>{
  return val %2 === 0;    
})
  */

/*
let arr = [3, 5, 7, 2, 3, 5, 22, 11, 14, 45, 55, 33, 44]; 
let evenNumbers = arr.filter((val) => {
  //   return val % 2 === 0;
  return val > 10;
});
console.log(evenNumbers);

*/

// Reduce() method . It perfoms some operations and reduces the array to sa single value. Itt returns that single value.
/* syntax

let arr = [45, 34, 64, 3, 2, 1,];
 const output = arr.reduce((accumulator , currentValue)=> {
      return accumulator + currentValue;

      })

      */
/*
let arr = [3, 5, 1, 6, 2, 7];
const output = arr.reduce((acc, curVal) => {
  return acc + curVal;
});
console.log(output);
//  24

.... finding the greatest/smallest value form an array using reduce method. 
let bigst = [3, 56, 2, 0, -324, 3453, 6543];
const value = bigst.reduce((accu, currVal) => {
  return accu < currVal ? accu : currVal;
});
console.log(value);


*/

// let marks = [34, 91, 94, 34, 67, 78, 87, 92];
// let topr = marks.filter((val) => {
//   return val > 90;
// });

// console.log(topr);

// get a number from a user and print all the remainig number from that particular number to one. for example the user usay 5 , then you have to print from 1 to 5
let n = prompt("Enter the number");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
console.log(arr);

// Q2 take a number n as an input from the user. Create an array from number from 1 to n.
// use the reduce method to calculate the sum of all the number in the array.
// use reduce method to calculate product of all numbers in the array.

let sum = arr.reduce((acc, curVal) => {
  return acc + curVal;
});
console.log("sum = ", sum);

let product = arr.reduce((acc, curVal) => {
  return acc * curVal;
});
console.log("product = ", product);
