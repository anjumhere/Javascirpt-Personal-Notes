// Variable rules
let name1 = "anjum";
name1 = "akmal";   /* reassigned */

let NAME1 = "adnan";
NAME1 = "AKRAM";     /* reassigned */
console.log(NAME1, name1);

var age1 = 44;
var age2 = 44;
console.log(age1);

 // let and const are block scoped elements i-e { console.log(helloworld);}

// Data types in javascript
/* 
1. Number 
2. Null
3. Symbol
4. String
5. Boolean " true false"
6. Bigint
*/

let age3 = 44;
let nullVal = null;

// Arithmetic
let a1 = 10; 
let b1 = 34;
console.log(a1+b1);
console.log(a1-b1);
console.log(a1*b1);
console.log(a1/b1);
console.log(a1%b1);
console.log(a1**b1);
console.log(++a1);

let x1 = 100;
x1 += 4; 
console.log(x1);

let z1 = "10";
z1 -= 5;
console.log(z1);

// operator in js 
console.log(x1==z1 ); /* == first it will implicitly change the string into number that it will compare */
console.log(x1===z1); /* strict version */
console.log(x1 !=z1);
console.log(x1!==z1); 

// == != === !==
let a2 = 10;
let b2 = "10";
console.log(a2==b2);
console.log(a2!=b2);
console.log(a2===b2);
console.log(a2!==b2);
console.log(a2<=b2);

// Object
const pen = {
    name: "Parket Jotter Standard CT Ball Pen",
    color: "black",
    cost : 270,
    isDeal: true,
    Ratings : "4/5 stars",
    discount: "Deal Of the Day (5% off);"    
}
console.log(pen, typeof(pen));

// Operators in js 
let a3 = 20 ;
let b3 = 7;
console.log("a + b = ", a3 + b3 );
console.log("a - b = ", a3 - b3 );
console.log("a x b = ", a3 * b3 );
console.log("a / b = ", a3/ b3 );
console.log("a % b = ", a3 % b3 );
console.log("a ** b = ", a3 ** b3 );

// UNARY OPERATORS 
console.log("a++ = ", a3++ );
console.log("++a = ", ++a3 );
console.log("--a = ", --a3 );
console.log("a-- = ", a3-- );

// assignment operators
let a4 = 20 ;
a4 += 5;  
console.log(a4);
a4 -= 5; 
console.log(a4);
a4 *= 5; 
console.log(a4 );
a4 %= 5; 
console.log(a4);
a4 **= 5; 
console.log(a4);

// logical operators 
let a5 = 54; 
let b5 = 55;
let cond1 = a5==b5; 
let cond2 = a5===b5;
console.log(cond1&&cond2); 
console.log("cond1 || cond2 = ", cond1||cond2); 
console.log(!(a5<b5), !(a5>b5));

// Conditional statements
let age4 = 25;
if(age4 <20){
    console.log("You are not eligible for the program");
}
else if ( age4 >=20 && age4 <= 50 ){
    console.log("You are eligible for the program");
}
else {
    console.log("Sorry too old");
}

// Ternary operator 
let result = age4 >=19 ? "adult" : "not adult ";
console.log(result);

// Practise multiple of 5
let number1 = 10;
if ( number1 %  5  == 0){
    console.log("This number is a multiple of 5");
}
else{ console.log("This number is not a multiple of 5 ");}

// students grading program
let marks1 = 75;
if (marks1 >=40 && marks1 <=49){
    console.log("You have barely passed the exam with E grade");
}
else if ( marks1 < 40){
    console.log("failed");
}
else if (marks1 >=50 && marks1 <=59){
    console.log("D Grade");
}
else if (marks1 >=60 && marks1 <69){
    console.log("C Grade");
}
else if (marks1 >=70 && marks1 <=79){
    console.log("B Grade");
}
else if (marks1 >=80 && marks1 <=89){
    console.log("A Grade");
}
else if (marks1 >=90 && marks1 <=99){
    console.log("A1 Grade");
}

// for loop
for ( let i1 = 0; i1<= 10; i1++){
    console.log(i1);
}

// sum of numbers 
let sum = 0; 
for( let i2 =0; i2<=10; i2++){
    sum = sum +i2;
}
console.log("Sum = ", sum);
console.log("The loop has ended");

// while loop
let i3 = 0; 
while( i3<= 5){
    console.log("i =" , i3);
    i3++;
}

// Do- While loop
let i4 = 0; 
do{
    console.log("i", i4);
    i4++;
} while(i4<=5);

// for-of loop
let str = "javascript";
let size = 0;
for(let val of str){
    console.log("character = ",  val);
    size++;
}
console.log(size);

// For-in loop
let student ={
    name: "rahul",
    class:12,
    isPall:true,
    cgpa:4
}
for(let i in student){
    console.log(i, "value = ", student[i]);
}

// Assignment = print all even numbers from 1 to 10.
for(let i5 = 0; i5<= 10; i5++){
   if(i5%2 ==0){
    console.log(i5);
   }
}

// guessing game simulation
let gameNum = 5;
let userNum = 5;
while(userNum != gameNum){
    userNum = 5;
}
console.log("congratulations, you have guessed the right number");

// Strings
let str2 = "kamalakhan";
console.log("The length of string is = ", str2.length);
console.log("The character that comes in the 5th place is = ", str2[5]);

let sen = `this is a special string`
console.log(typeof sen);

let obj = {
    name: "pen",
    price : 44
}
console.log("The of the item is ", obj.name, "and its price is = ", obj.price, "rupees");
let output = `The cost of ${obj.name} is ${obj.price} rupees`
console.log(output);

let str3 = "adnan\nanjum";
let str4 = "adnan\tanjum";
console.log(str3);
console.log(str4);

let str5 = "Iron Man";
console.log(str5.toLowerCase());
console.log(str5.toUpperCase());

let str6 = "    iron man       1 ";
console.log(str6.trim());

// Arrays
let arr = [1, 2, 3, 4];
console.log(arr);
console.log("index zero is", arr[0]);
console.log("length of the array is = ", arr.length);

arr.push(5);
console.log(arr);
let popped = arr.pop();
console.log(popped);

let item = ["pen", "pencil", "eraser","scale"]
item.push("rubber");
console.log(item);
item.pop();
console.log(item);

let strArr = ["names", "world","pen", "apple"];
let strArr1 = ["12", "213","342", "123"];
console.log(strArr.toString());
console.log(strArr1.toString());

let Marvel = ["spiderman", "thor", "ironman"]
let Dc = ["peacemaker","vigilante","flash"]
let heroes = Marvel.concat(Dc);
console.log(heroes);

Marvel.unshift("drstrange");
console.log(Marvel);
Marvel.shift();
console.log(Marvel);
console.log(heroes);

console.log(heroes.slice(4));

let num = [0,1,2,3,4,5,6,7];
num.splice(3,3,5,4,3);
console.log(num);

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift()
companies.splice(2,1,"Ola")
companies.push("Amazon");
console.log(companies);
