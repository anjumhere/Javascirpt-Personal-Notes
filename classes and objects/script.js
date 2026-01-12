// classes and Objecxts
/* prototypes in js 
A javascript object is an entity having some state and behaviours( properties and metthods)
js objects have a special property called prototypes.
We can set prototypes using ".-- proto --" its an object itself and it contains properties and methods in its own. 


*/
/*
const student = {
  name: "Adnan Anjum",
  marks: 95.3,
  printMarks: function () {
    console.log("marks = ", this.marks); //  "This" is a new keyword used in object to point out an object, so when we are writing "this.marks" we are saying student.marks.
  },
};

*/

/*
const employee = {
  calcTax() {
    console.log("Tax rate is 5%");
  },
};

const aliRaza = {
  salary: 50000,
};

const aliRaza1 = {
  salary: 50000,
};

const aliRaza2 = {
  salary: 50000,
};

const aliRaza3 = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate is 50%");
  },
};

const aliRaza4 = {
  salary: 50000,
};
aliRaza.__proto__ = employee;
aliRaza1.__proto__ = employee;
aliRaza2.__proto__ = employee;
aliRaza3.__proto__ = employee;
aliRaza4.__proto__ = employee;



// PROTOTYPE IS GENERALY A REFRENCE TO AN OBJECT.
// IF OBJECT AND PROTOTYPE HAVE SAME METHOD("function") , OBJECT'S METHOD WILL BE USED.

*/

const company = {
  tax() {
    console.log("Tax return is 5%");
  },
};
const raza = {
  salary: 55000,
};
raza.__proto__ = company;

/*

CLASSES :  Class is a program-code template for create object. 
Those objects will have some state (variables, properties) and some  behavious (functions) inside it.
 

syntax 

class myClass {
constructor (){--}
myMethod(){--}
}

let myObj = NEW MyClass(); // here new is a keyword

*/

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.brandName = brand;
//   }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let Skyline = new ToyotaCar();

/*
class Human {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    // this.branch = branch;
  }

  details() {
    console.log(
      `Hello my name is ${this.name} and my age is ${this.age} and i am working as a ${this.occupation} and I work at ${this.branch} branch.`
    );
  }
  walk() {
    console.log("waling---");
  }

  setName(name) {
    this.name = name;
  }
}

class Engineer extends Human {
  constructor(name, age, occupation, branch) {
    super(name, age, occupation);
    this.branch = branch;
  }
  child() {
    console.log("i am just a child class");
  }
}
let person1 = new Human("Steve", 33, "doctor", "Haryana");
let employee = new Human("Pankaj", 44, "carpentor", "Delhi");
let anjum = new Engineer("Anjum", 21, "Software Engineer", "london");
*/
// class human {
//   constructor(name, age, occupation) {
//     console.log("Enter parent constructor constructor");
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }
//   walk() {
//     console.log("i can walk");
//   }
//   eat() {
//     console.log("I can eat");
//   }
//   details() {
//     console.log(
//       `My name is ${this.name}, my age is ${this.age} and i work as a ${this.occupation}. I live in ${this.location}`
//     );
//   }
// }
// class place extends human {
//   constructor(name, age, occupation, location) {
//     console.log("Entered child constructor");
//     super(name, age, occupation);
//     this.location = location;
//     console.log("Exit child constructor");
//   }
//   work() {
//     super.eat();
//     console.log("I work now");
//   }
// }

// const person1 = new place("Adnan", 22, "Software Engineer", "london");
// After creating a new object on child constructor first we enter the child constructor , then we will enter parent constructor because
// we used super() then we exit from child constructor.

// Practice question: You are creating a website for your college. Create a User with 2 properties, name and email. I also has a method to viewData()that allows user to view website date.
let text = document.querySelector(".heading");
let btn = document.querySelector(".btn");
let contain = document.querySelector(".container");
console.log(text);
console.log(btn);
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    // text.textContent = `Name: ${this.name},<br> Email: ${this.email}`;
    text.innerHTML = `Name: ${this.name}<br>Email: ${this.email}`;
    text.style.color = "black";
    text.style.textAlign = "left";
    text.style.fontSize = "30px";
    contain.style.borderColor = "green";
  }
}
btn.addEventListener("click", () => {
  const user1 = new User(prompt("Enter your Name"), prompt("Enter your Email"));
  user1.viewData();
  btn.innerText = "Your data";
});
// const user1 = new User(prompt("Enter your Name"), prompt("Enter your Email"));

// try and catch

let a = 3;
let b = 5;

console.log("Result = ", a + b);
console.log("Result = ", a - b);
try {
  console.log("Result = ", a / c);
} catch (err) {
  console.log(err);
}

console.log("Result = ", a * b);
console.log("Result = ", a % b);
