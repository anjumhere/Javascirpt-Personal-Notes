/*
------->>>Window Object = The window object represents an open window in a browser.
It is browser's object (not javascript's ) and is automatically created by the browser.
It's a global objext with lots of properties and methods. 
*/

/*

--------- DOM ----------
When a webpage is loaded, the browser creates a Document Object Model (DOM) of the page.

*/

/*
console.log() ----> used to print 
console.dir -----> used to print properties of a document.

Window 
   |__Document
         |____Head 
               |___Body
                     |___H1
                        |___p1
                            |__Button
                                 |___Div

Basic definition of window 
The window is the browser tab itself it is the top level container
that holds everything related to webpage . 
All browser features like (alert, console , local storage , document) live inside window.

Basic definition of Document
The document is the actual webpage loaded inside the browser tab.
It contains Html structure(head , body, elements) that you can read or change using javascript.

Definition of DOM
 
Dom is a structred representation of your webpage (document) inside your browser environment(window).
It turns your html into a tree of object so javascript can read , chnage and control everthing on the page.

window --> broswer(provides the whole environment for webpage)
document ---> webpage ( contains html structure)
DOM ----> webpage converted to objects inside the browser

*/

// console.dir(document);
// console.dir(document.body);
// console.log(document.body);
// document.body.style.background = "green";

// DOM manipulation----------

// 1....Selecting with ID
// let heading = document.getElementById("heading");
// console.dir(heading);

// let button = document.getElementById("myid");
// console.log(button);

// 2..... with Class // returns a html collection just like an array.
// let heading2 = document.getElementsByClassName("heading2");
// console.dir(heading2); // .dir shows element as javascript object
// console.log(heading2); // .log shows element as HTML

// 3....Selecting with TagName
// let para = document.getElementsByTagName("p");
// console.dir(para);

// 4. Query Selector --- it will automatically detect class / id
// let siEl = document.querySelector(".heading");// it is used for single element.
// console.dir(siEl);

// let alEl = document.querySelectorAll(".heading");// it is used for all elements.
// console.dir(alEl);

// Some important properties.
/*
1.. tagName : returns tag for element node.


let btn = document.querySelector("#myid");
console.dir(btn.tagName);

*/
// let kid = document.querySelector("div").children;
/*
Children : The children property returns a live HTML collection which 
contains all of the childs elements of the element upon which is called.

firstchild:  First child returns the first node of child in the tree. 
lastchild : last child return the last node of the the tree.


*/

// some important properties.

/*
These are used to access the elements and to change their values
1.. tagName : returns tag for element node.

let btn = document.querySelector("#bttn");
console.dir(btn.tagName);

2... innerText : Returns the text content of the element and all its children.
let div = document.querySelector("div");
console.dir(div.innerText);

3....innerHtml : returns the plain text or HTML contents in the element.

console.dir(div.innerHTML);

4... textContent : returns textual content even for hidden elements.
let content = document.querySelector(".head2");
console.dir(content.textContent); // it can also show hidden context in the element. 


let heading = document.querySelector("#head");

we can also change the data in the elements in real time.
console.dir((heading.innerText = "This is the new heading"));
*/
