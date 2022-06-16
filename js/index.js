"use strick";

// const person = [
//   "Ibrohim",
//   "Abdufattoxov",
//   2008,
//   "Developer",
//   ["Jasur", "Akbarjon"],
// ];

// const ibrohim = {
//   firstName: "Ibrohim",
//   lastName: "Abdufattoxov",
//   birthYear: 2008,
//   job: "Developer",
//   friends: ["Jasur", "Akbarjon"],
//   caclAge: function () {
//     console.log(this);

//     return;
//   },
// };

// console.log(ibrohim.caclAge());

// ibrohim.job = "Quruvchi";

// console.log(
//   `${ibrohim.firstName}ning ${ibrohim.friends.length}ta do'sti bor va uning yaqin do'sti ${ibrohim.friends[0]}`
// );

// const dog = {
//   name: "Bobik",
//   type: "Afchalka",
//   color: "dimgray",
//   tail: "long",
//   bark: function () {
//     return "Woaf!";
//   },
// };

// DOT NOTATOION:

// console.log(ibrohim.friends[1]);

// BRACKET NOTATION:

// console.log(dog["bark"]());

// DOT VS. NATATION

// const userValue = prompt("Qaysi ma'lumot kerak?");

// console.log(dog[qiymat]);

// DOM:

const elBody = document.querySelector(".body");

// CRAETE ELEMENT:

const newP = document.createElement("p");

// TEXT CONTENT:

newP.textContent = "Salom";

// ATTRIBUTE:

newP.setAttribute("class", "hero__desc");

// APPENT

elBody.appendChild(newP);

// CHELLENG

const elList = document.querySelector(".list");

const newItem = document.createElement("li");
const newImg = document.createElement("img");

newImg.setAttribute("src", "https://picsum.photos/200/200");

elList.appendChild(newItem);
newItem.appendChild(newImg);
