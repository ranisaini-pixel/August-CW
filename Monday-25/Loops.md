for (initialization; condition; increment/decrement) {
    // Code to execute
}

while (condition) {
    // Code to execute
    increment/decrement
}

do {
    // Code to execute
} while (condition);


//for in
The for...in loop is used to iterate over the properties of an object. It only iterate over keys of an object which have their enumerable property set to “true”.

Syntax

for (let key in object) {
    // Code to execute
}

 JavaScript for-of Loop
The for...of loop is used to iterate over iterable objects like arrays, strings, or sets. It directly iterate the value and has more concise syntax than for loop.

Syntax

for (let value of iterable) {
    // Code to execute
}


Choosing the Right Loop
Use for loop when the number of iterations is known.
Use while loop when the condition depends on dynamic factors.
Use do-while loop to ensure the block executes at least once.
Use for...in loop to iterate over object properties.
Use for...of loop for iterating through iterable objects.