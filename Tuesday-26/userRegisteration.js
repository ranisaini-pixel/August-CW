// Please select one option to proceed-
// 1. Login as CW Admin
// 2. Login as employee
// 3. Register yourself
// 4. Exit

// Case 3: Register Yourself
// Ask for Name, Email, Role (select Admin / Employee)
// Generate username (using username generator we built earlier)
// Save user in users array
// Show message: "Registration successful. Please login."
// Case 4: Exit
// Print "Thank you. Exiting system..." and stop program


const prompt = require("prompt-sync")();

let users = [];
let store_name = "CodingWorkx";

console.log(`Welcome to ${store_name}`);

while (true) {
    console.log(`
Please select one option to proceed-
   1. Login as CW Admin
   2. Login as employee
   3. Register yourself
   4. Exit
`);

    let choice = prompt("Enter your choice: ");

    switch (choice) {
        case "1":
            console.log("In Progress")
            break;

        case "2":
            console.log("In Progress");
            break;

        case "3":
            let name = prompt("Enter your name: ");
            let email = prompt("Enter your email: ");
            let role = prompt("Enter your role (Admin/Employee): ");


            if (name || email || role) {

                const username = name.toLowerCase().replace(/\s/g, '');

                const user = {
                    name,
                    email,
                    role,
                    username
                }
                
                users.push(user);

                console.log("all users", users);
                console.log("Registration successful. Please login.");


            } else {
                console.log("Enter proper data")
            }

            break;

        case "4":
            console.log("Thank you. Exiting system...");
            process.exit();

        default:
            console.log("Invalid choice, please try again.");
    }
}

