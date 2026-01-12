/* Attributes 

.getAttribute(attr) = to get the attribute value like class or id. 
.getAttrbute(attr,value) = to set the attribute value 

*/

// let div = document.querySelector("div");
// console.log(div);

// let getatr = div.getAttribute("class");
// console.log(getatr);

// let setatr = div.setAttribute("class", "2ndname");
// console.log(div);

// let para = document.querySelector("div");
// console.log(para.setAttribute("class", "paraguraph"));
// console.log(para);

// node.style
// -----done -----------

// let css = document.querySelector("div");
// css.style.backgroundColor = "yellow";
// css.style.color = "green";
// css.innerText = "Hello World";
// css.setAttribute("class", "box");

/*

Insert Elements 

let el = document.createElement("div")

node.append(elementname ), adds the element at the end of the node. (inside)
node.prepend(el), add the element at the begining of the node (inside).
node.before(el), adds the element before the node. (outside).
node.after(el), adds the element at the end of the node. (ouside).

node.remove(nothing here), deletes the node
*/

let div = document.querySelector("div");
let btn = document.createElement("button");
btn.innerText = "click me";
let append = div.append(btn);
console.log(append);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);
// btn.remove();

let container = document.querySelector("div");
let child = document.createElement("div");
child.innerText = "I am a child node";
let result = container.appendChild(child);

console.log(result);
