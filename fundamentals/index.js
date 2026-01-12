// Variable rules
// let name = "anjum";
name = "akmal";   /* redeclared*/

// let NAME = "adnan";
NAME = "AKRAM";     /* Redeclared */
// console.log(NAME, name);

// var age = 44;
// var  age = 44;
// console.log(age);

// let and const are bloced scoped elements i-e { console.log(helloworld);}

// Data types in javascript
/* 
1. Number 
2. Null
3. Symbol
4. String
5. Boolean " true false"
6. Bigint

let age = 44;
let null;
*/

// let a = 10; 
// let b =34;
// console.log( a+b);
// console.log( a-b);
// console.log( a*b);
// console.log( a/b);
// console.log( a%b);
// console.log( a**b);
// console.log(++a);

// let x = 100;
// // x += 4; 
// console.log(x);

// let z = "10";
// // z -= 5;
// console.log(z);

// // operator in js 
// console.log(x==z ); /* == first it will implicitly change the string into number that it will compare */
// console.log( x===z); /*  i will not change  the data type it checks the if the datatype is same , it is  the  strictor version */
// console.log( x !=z);
// console.log( x!==z); /*  i will not change  the data type it checks the if the datatype is same , it is  the  strictor version */
// console.log( x!==z);


// ==
// let a = 10;
// let b = "10";
// console.log(a==b);

// // !=
// console.log( a!=b);

// // ===
// console.log(a===b);

// // !==
// console.log(a!==b);

// console.log( a<=b);

// const pen = {
//     name: "Parket Jotter Standard CT Ball Pen",
//     color: "black",
//     cost : 270,
//     isDeal: true,
//     Ratings : "4/5 stars",
//     discount: "Deal Of the Day (5% off);"    

// }
// console.log(pen, typeof(pen););


// Operators in js 
// Arthematic operators 

// + , - , *, / 

// let a = 20 ;
// let b = 7;
// console.log("a + b = ", a + b );
// console.log("a - b = ", a - b );
// console.log("a x b = ", a * b );
// console.log("a // b = ", a/ b );

// modulus , exponentiation, increment, decrement 
// console.log("a % b = ", a % b );
// console.log("a ** b = ", a ** b );

// UNARY OPERATORS 

// increment / decrement operatos + prefix and postfix operators 


//  console.log("a++ = ", a++ );
//  console.log("++a = ", ++a );
//  console.log("--a = ", --a );
//  console.log("a-- = ", a-- );

// assignment operators +=, -= , *=, %= , **=

// let a = 20 ;

// a += 5;  // means a = a+5;  
// console.log( a );

// a -= 5; // means a = a-5; = 15 
// console.log(a);

// a *= 5; // means a = a*5; = 100
// console.log(a );

// a %= 5; // means a = a %5; = 0
// console.log(a);

// a **= 5; // means a = a**5; = 3200000
// console.log(a);

// logical operators 
// logical and && , logical or ||, logical not !

/* A table for all the logical operators 


   cond1  | cond2 | && | || | !
       T  | T     | T  | T  |
       T  | F     | F  | T  |
       F  | T     | F  | T  |
       F  | F     | F  | F  |

*/

// let a = 54; 
// let b = 55;

// let cond1 = a==b; // true 
// let cond2 = a===b;// false
// console.log(cond1&&cond2); // false 

// conclusion in the logical and operator both the conditions should be true for the operator to return the value as true.

// Logical 0r ||
// let cond1 = a==b; // true 
// let cond2 = a===b; // false 
// console.log( "cond1 || cond2 = ", cond1||cond2); // true

// In logical or operator, if any one of the condition is true it will return true, it will only return false if both the conditions are false. 

// Logcial not ! operator 
// let cond1 = !(a<b);
// let cond2 = !(a>b);
// console.log(cond1, cond2);

// In logical not operator, it return true if the condition is false and it will return false if the condition is true. In simple words it does the opposite of the condition. true= false and false = true. 

// condidtional statements. Conditiional statements are powerful tools in javascript to meet the required results using conditions. 

// let age = prompt();

// if(age <20);{
//     console.log("You are not eligible for the program");
// }
// else if ( age >=20 && age <= 50 );{
//     console.log( " You are eligible for the program");
// }
// else {
//     console.log("Sorry too old");
// }


// Ternery operator 
// condition? "True Output" : "False Output";

// let result = age >=19 ? "adult" : "not adult ";
// console.log(result);

// Practise 

/* Q1-- Get user to input  a number using prompt("Enter a number");.
Check if the number is a multiple of 5 of not. */

// let number = prompt("Enter the Number");
// if ( number %  5  == 0);{
// console.log("This number is a multiple of 5");
// }
// else{ console.log("This number is not a multiple of 5 ");}

// done

// students grading program

// let marks = prompt("Please enter your marks ");
// marks = Number(marks);

// if (marks >=40 && marks <=49);{
//     console.log("You have bearly passed the exam with E grade");
// }
// else if ( marks < 40);{
//     console.log("failed");
// }
// else if (marks >=50 && marks <=59);{
//     console.log("D Grade");
// }

// else if (marks >=60 && marks <69);{
//     console.log("C Grade");
// }

// else if (marks >=70 && marks <=79);{
//     console.log("B Grade");
// }

// else if (marks >=80 && marks <=89);{
//     console.log("A Grade");
// }

// else if (marks >=90 && marks <=99);{
//     console.log("A1 Grade");
// }

/* practice , get a number from using and check whether the number is a multiple of 5 or not.*/

// let n = prompt ("Please enter the number");

// if( n % 5 == 0);{
//     console.log( n, "is a multiple of 5");
// }
// else 
//     {
// console.log( n, " is not a multiple of 5 ");
// }


// for ( let i = 0; i<= 100; i++);{
//     console.log( i );
// }

// sum of numbers 

// let sum = 0; 
// for( let i =0; i<=100; i++);{
//     sum = sum +i;
// }
// console.log("Sum = ", sum);
// console.log( "The loop has ended");


// while loop

// let i = 0; 
// while( i<= 24);{
//     console.log("i =" , i);
//     i++;
// }


// Do- While loop

// let i = 0; 
// do{
//     console.log("i", i);
//     i++;
// } while(i<=100);

// --- for-off loop

// let str = "javascript";
// let size = 0;
// for(let val of str);{
//     console.log("character = ",  val);
//     size++;
// }
// console.log(size);

// For-in loop

// let student ={
//     name: "rahul",
//     class:12,
//     isPall:true,
//     cgpa:4
// }
// for(let i in student);{
//     console.log(i, "value = ", student[i]);
// }

// Assignment = print all even numbers from 1 to 100.

// for(let i = 0; i<= 100; i++);{
//    if(i%2 ==0);{
//     console.log(i);
//    }
// }

// // Assignment 2 = ask the user the guess the right number and keep asking the right number from the user until the  user giver ther right answer.
// let gameNum = 47;
// let userNum = prompt("Guess the number");

// while(userNum != gameNum);{
//     userNum = prompt("Oops wrong guess, try again");
// }
// alert("congratulations, you have guessed the right number");

// for-off loop revise

// let st = "kamrankhan";
// let size = 0;
// for(let val of st);{
//     console.log("Characters = ", val);
//     size++;
// }
// console.log("Size of string is = ", size);

// for-in loop practtise

// let student = {
//     name: "AdnanAnujum",
//     class: 12,
//     section: "ICS",
//     isPass : true
// }
// for(let val in student);{
//     console.log(val,"value = ",  student[val]);}


// print all even numbers from 1 to 100 

// for( let i = 0; i <=100; i++);{
//     if(i%2==0);{
//         console.log(i);
//     }
// }

// guessing game number

// let gameNum = 55;
// let userNum = prompt("Guess the number");
// while(userNum != gameNum);{
//     userNum = prompt("Oops wrong answer try again ");
// }
// alert("Congratulations you have entered the right number");


// -------------------------------------------------

// ---------- Strings ----------
// strings is a sequence of characters used to represent text.


// some inbuilt properties
// length str.length and index number also known as indices
// let str = "kamalakhan";
// console.log("The length of string is = ", str.length);
// console.log("The character that comes in the 5th place is = ", str[5]);


// template literal is a special type of string 
// A way to have embadded  expression in strings
// -------------string interpolation-------

// to create strings by doing substution of placehoolders 
// string ${expression} string no ""required

// let sen = `this is a special string`
// console.log(typeof sen);


/*
let obj = {
    name: "pen",
    price : 44

}

console.log("The of the ittem is ", obj.name, "and its price is = ", obj.price, "rupees");
let output = `The cost of ${obj.name} is ${obj.price} rupees`
console.log(output);


*/

//escape characters in strings
 
// \n --- this one places the text next to it in next line
// \t ---- this one gives a tab space

/*
let str = "adnan\nanjum";
let str2 = "adnan\tanjum";
console.log(str);
console.log(str2);
*/

// string methods 
// they are built in methods to manipulate strings

/*

// string.toLowerCase(); converts the string to lowercase
let str = "Iron Man";
console.log(str.toLowerCase(););

// string.toUpperCase(); converts the string to uppercase
console.log(str.toUpperCase(););

// string.trim(); reduces the space form starting and the end of the string 
let str2 = "    iron man       1 ";
console.log(str.trim(););

console.log(str); // the oringal value of sttringg is unchanged its justt changed tto a new value because the strings in javascriptt are ummutable
// rest of the methods to do later






*/


// practise get an input froom tthe user where user have tto entter their full name then we have to give a username to him starting with @ annd at the end we have to return  tthe lengtth of the username. 


/*
let  hashtag = "@";
let fullName = prompt("Enter your full name");
let username = `I am ${hashtag+fullName}`;
console.log(username, "\nSize of username is =  ",  fullName.length);

*/

// -------- chapter 4 -------- Arrays -------------

 // Arrays are collections of items 

 // arrays store multiple values in a single variable. useful for lits like numbers , strings orobjects

//  let arr = [1, 2, 3, 4];
//  console.log(arr);

 // We use indexes to access anyyy ittem quicklyy, index sttarts from zero

//  console.log("index zero is", arr[0]);

 //lenth , itt shows how  manyy items are there in the array.

//  console.log("length of the array is = ", arr.length);
 
// push , itt adds items at the end of an array 

// console.log(arr.push(4););
// console.log(arr);

// pop(); --- it removes the lastt item from the array
// let pop = arr.pop();
// console.log(pop);

// unshift(); ---- it adds items at the start of an array
// /*
// let item = [10, 20, 30, 40, ];
// // console.log(item.length);  // 4
// // console.log(item.push(50);); // 10, 20, 30, 40, 50 
// console.log(item.pop();); // 10, 20, 30, 40
// console.log(item);
// */

// // loops in arrays

// let arr = ["kamran", "adnan", "shoaib", "mehdi"]


// //for loop
// for(let idx=0; idx<arr.length; idx++);{
//     console.log(arr[idx]);
// }

// // for-in loop 
// for(let el of arr);{
//     console.log(el);
// }

// // console.log(arr.length);// LAST INDEX +1 
// // console.log(arr);

// let arr = ["kamran", "ali ", "ahmed", "akmal", "shoaib"];

// for loop 
// for(let i = 0; i< arr.length; i++);{
//     console.log(arr[i]);
// }

// // for-off loop
 
// for(let val of arr );{
//     console.log(val);
// }

// let arr = ["kamran", "ali ", "ahmed", "akmal", "shoaib"];


// let cities = ["gilgit", "karachi", "lahore", "pindi", "islamabad"];

// for(let city of cities);{
//     console.log(city.replace("gilgit","punjab"););
// }


// let marks = [85,97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks);{
//     console.log(val);
//     sum = sum+val;
// }
// let avg = sum/marks.length;
// console.log(avg);

// let marks = [ 85,97,44,37,76,60]
//find average of the marks of the entire class
// add all of them 
// then divide with the length of the string
// let sum = 0;
// for(let val of marks);{
    // sum = sum+val;// 
// }
// let avg = `The average of the marks of the class is = ${sum/marks.length}`;
// console.log(avg);
// for a given array with prices of 5 items . all items have an offer of 
// 10% off on them. Change the array to store final price after applying offer.
// minus 10 from every index  


// let items = [250, 645, 300 , 900, 50];
// for(let val of items);{
// let discount= val/10;// this gives the discount on every item. 
// let finalOffer = val- discount;
// console.log(`Price before discount =  ${val}`);
// console.log(`The final price after the discount is = ${finalOffer}`); 
// }

// let items = [250, 645, 300 , 900, 50];
// for(let i=0; i<items.length; i++);{
//     let discount = items[i]/10;
//     let offer =items[i]-discount;

//     console.log();
// }

// array methos. push(to add something at the end  of the array);
let item = ["pen", "pencil", "eraser","scale"]
item.push("rubber");
console.log(item);

// pop(deletes item from the end of an  array and can also  returns the deleted item);
item.pop();
console.log(item);

// toString(); converts array into a string

let str = ["names", "world","pen", "apple"];
let str1 = ["12", "213","342", "123"];
console.log(str.toString());
console.log(str1.toString());
console.log(str);
console.log(str1);
// it does not changes the array

// concat(); , it joins two arrays and return new array of these two.

let Marvel = ["spiderman", "thor", "ironman"]
let Dc = ["peacemaker","vigilante","flash"]
let heroes = Marvel.concat(Dc);
console.log(heroes);

// unshift(); = opposite of push();. The unshift(); methods adds something to the begining to the array.
Marvel.unshift("drstrange");
console.log(Marvel);

// shift = opposite of pop();. The shit(); method deleted an item from the start of an array.
Marvel.shift();
console.log(Marvel);
console.log(heroes);

// slice()  This method returns a piece of array. This does not change the orignal string.
console.log(heroes.slice(4));

// splice() This method is used to add , delete , replace inside a string and it changes the orgnal string.

let num = [0,1,2,3,4,5,6,7];
num.splice(3,3,5,4,3);
console.log(num);
// practise question. remove the first index, remove uber and replace it with ola and add amazong at the end of the string.
let companies = ["Bloomberg","Micorsoft","Uber","Google","IBM","Netflix"];
companies.shift()
companies.splice(2,1,"Ola")
companies.push("Amazon");
console.log(companies)