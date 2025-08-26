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
            let chooseRole = prompt("Enter your role 1.Admin, 2. Employee : ");



            const admin = "Admin"
            const employee = "Employee"

            if (chooseRole === '1') {
                chooseRole = admin;
            }

            if (chooseRole === '2') {
                chooseRole = employee;
            }


            if (name && email && chooseRole) {

                const emailExists = users.some(user => user.email === email);

                console.log(emailExists, "69");

                if (!emailExists) {

                    const username = name.toLowerCase().replaceAll(" ", "_") + Date.now()

                    const user = {
                        name,
                        email,
                        chooseRole,
                        username
                    }

                    users.push(user);

                    console.log("all users", users);
                    console.log("Registration successful. Please login.");
                } else {
                    console.log("Email Already exists")
                }
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



