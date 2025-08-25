// const prompt = require("prompt-sync")
// const prompt = promptSync();

// //getting operation from the user
// const operation= iprompt("Enter Operation 1= Add, 2= Sub, 3= Multiply, 4= Divide, 5= Exit: "); //error

// const operand1= parseFloat(prompt('Enter first number: '));
// const operand2= parseFloat(prompt('Enter second number: '));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let result;

function calculation(operation, operand1, operand2) {
    switch (operation) {
        case "1":
            return result = operand1 + operand2;
            break;

        case "2":
            return result = operand1 - operand2;
            break;

        case "3":
            return result = operand1 * operand2;
            break;

        case "4":
            if (operand2 === 0) {
                return "Error: Division by zero is not allowed";
            }
            return result = operand1 / operand2;
            break;

        case "5":
            return "Exit";

        default:
            return "Invalid Operation: Please choose between 1 to 5";
    }
}


// function startCalculator() {
//     console.log("1= Addition")
//     console.log("2= Substration")
//     console.log("3= Multiply")
//     console.log("4= Divide")
//     console.log("5= Exit")

//     rl.question("Enter your operation (1-5):", (operation) => {
//         if (operation === "5") {
//             console.log("exit")
//             return;

//         }

//         if (operation < 1 || operation > 4) {
//             // rl.close();
//             console.log("Invalid Operation: Please choose between 1 to 5");
//             startCalculator();
//             return;
//         }


//         rl.question("Enter your 1st number : ", function (operand1) {
//             rl.question("Enter your 2nd number : ", function (operand2) {

//                 const num1 = parseFloat(operand1)
//                 const num2 = parseFloat(operand2)

//                 if (isNaN(num1) || isNaN(num2)) {
//                     console.log("Invalid Operation")
//                     startCalculator();
//                     return;
//                 }

//                 const result = calculation(operation, num1, num2);
//                 console.log("your result :", result);
//                 startCalculator();
//                 return;

//                 // rl.close()
//             })
//         })


//     })
// }

// startCalculator();




function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => resolve(answer));
    });
}



async function startCalculator() {
    while (true) {
        console.log("\n1= Addition");
        console.log("2= Subtraction");
        console.log("3= Multiply");
        console.log("4= Divide");
        console.log("5= Exit");

        const operation = await askQuestion("Enter your operation (1-5): ");

        if (operation === "5") {
            console.log("Exiting...");
            break; 
        }

        if (operation < "1" || operation > "4") {
            console.log("Invalid Operation: Please choose between 1 to 5");
            continue;
        }

        const operand1 = await askQuestion("Enter your 1st number: ");
        const operand2 = await askQuestion("Enter your 2nd number: ");

        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid numbers! Please try again.");
            continue;
        }

        const result = calculation(operation, num1, num2);
        console.log("Your result:", result);
    }

    rl.close();
}

startCalculator();









