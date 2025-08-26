//closure 
function counter() {
  let count = 0;   // outer function variable

  return function () {   // inner function (closure)
    count++;
    return count;
  };
}

const myCounter = counter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3


//Hoisting

console.log(a);
var a = 10;


var x;  
console.log(x); 
x = 5;


console.log(num);
var num = 100;
console.log(num); 


// console.log(b); 
// let b = 20;


sayHello(); 

function sayHello() {
  console.log("Hello!");
}


greet();

var greet = function() {
  console.log("Hi!");
};


hello();

let hello = () => {
  console.log("Hey there!");
};



//functions

//regular function

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));


//named function
function greet() {
  console.log("Hello, World!");
}
greet();


//arrow function
const greet1 = () => {
  console.log("Hello, World!");
};
greet1();


//anonymous function
setTimeout(function() {
  console.log("I will run after 2 seconds");
}, 2000);


//IIFE
(function() {
  console.log("I run immediately!");
})();


//callback funtion
function greet(name, callback) {
  console.log("Hello " + name);
  greet();
}

greet("Rani", function() {
  console.log("Welcome to Codingworkx!");
});


//splice

let arr = [1, 2, 3, 4, 5];

//remove
arr.splice(1, 2); 
console.log(arr);

// add 
arr.splice(1, 0, 10, 20);
console.log(arr); 


//slice
let arr1 = [10, 20, 30, 40, 50];

let part = arr1.slice(1, 4); 
console.log(part); 
console.log(arr1);  

//find
let nums = [5, 12, 8, 130, 44];

let found = nums.find(num => num > 10);
console.log(found);

//findIndex
let q = [5, 12, 8, 130, 44];

let idx = q.findIndex(n => n > 100);
console.log(idx);

//filter
let num1 = [10, 25, 30, 45, 50];

let result = num1.filter(num => num > 30);
console.log(result);

//map
let number = [1, 2, 3, 4];

let doubled = number.map(n => n * 2);
console.log(doubled); 

//forEach
let n = [1, 2, 3];

n.forEach(n => console.log(n * 2));

//every
let a0 = [2, 4, 6, 8];

let allEven = a0.every(n => n % 2 === 0);
console.log(allEven); 






