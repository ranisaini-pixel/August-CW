//for loops
for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
}


for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

//while

let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}


//do while
let p = 0;
do {
    console.log("Iteration:", p);
    p++;
} while (p < 3);


//for in

const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}

//for of
let a = [1, 2, 3, 4, 5];
for (let val of a) {
    console.log(val);
}