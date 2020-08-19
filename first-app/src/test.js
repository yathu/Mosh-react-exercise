// import React from "react";
// import ReactDom, { render } from "react-dom";

// const element = <h1>my app</h1>;

// ReactDom.render(element, document.getElementById("root"));

const jobs = [
  { id: 1, isActive: false },
  { id: 2, isActive: true },
  { id: 3, isActive: true },
];

// let activeJob = jobs.filter(function (jobs) {
//   return jobs.isActive;
// });

let activeJob = jobs.filter((jobs) => jobs.isActive);
console.log(activeJob);

//array map
const colors = ["green", "blue", "red"];

const color = colors.map((color) => `<li><${color}/li>`);

console.log(color);

// Object Destructuring

const country = {
  name: "sl",
  city: "colombo",
};

const { name, city: ct } = country;

console.log("name:", name);
console.log("city:", ct);

//spread operator

const a = ["a", "b", "c"];
const b = [1, 2, 3];

const c = [...a, "d", ...b];
console.log(c);

const first = { name: "yathavan" };
const secound = { age: 31 };

const three = { ...first, address: "Pointpedro", ...secound };
console.log(three);
//output {name: "yathavan", address: "Pointpedro", age: 31}

// class constructer with super seperate class and export & default export with name export

// import ... from class
// import ...,{...}from class

// import personClass,{function} from "./person.js"
// import React,{Component} from "react"

//and bind method for  set functions (function also obj) this

const person = {
  name: "yathavan",
  talk() {
    console.log(this);
  },
};

const animal = {
  name: "animal",
  bark() {
    console.log("bark");
  },
};

person.talk(); //{name: "yathavan", talk: ƒ}

//now talk is function if doubt please console same for talk2
const talk = person.talk.bind(person);
talk(); //{name: "yathavan", talk: ƒ}

const talk2 = person.talk.bind(animal);
talk2(); //{name: "animal", bark: ƒ}