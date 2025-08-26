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

// Case 1-
// Enter your email  -
// scenario 1 - when email found with the incorrect role then show error message - "You are not authorized to login"
// scenario 2 - when email not found then show error message - "Your not registered. Register yourself"
// scenario 3 -  Everything goes well then onboard the user by clearing the console
// :white_check_mark: Welcome to CW Admin
// 1. Add Laptops
// 2. View All Laptops
// 3. Search Laptop by Name
// 4. Delete Laptop by Name
// 5. Logout
// > 1
// Enter Laptop Name: MacBook Pro
// Enter Brand: Apple
// Enter Quantity: 3
// :white_check_mark: Laptop added successfully!
// > 2
// Laptop Inventory:
// - MacBook Pro | Apple | Qty: 3
// - MacBook Pro | Apple | Qty: 3
// - MacBook Pro | Apple | Qty: 3
// >3
// Laptop Detail:
// - MacBook Pro | Apple | Qty: 3
// 4>
// Delete that laptop
// >5
// Note: clear console
// Please select one option to proceed-
// 1. Login as CW Admin
// 2. Login as employee
// 3. Register yourself
// 4. Exit


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
            let userEmail = prompt("Enter your email: ");

            const emailExists = users.filter(user => user.email === userEmail);

            if (emailExists) {

                const verifyRole = emailExists[0].role;

                if (verifyRole === "Admin") {

                    console.clear();
                    console.log("Your are Authorised, Login successful");
                    console.log("Welcome to CodingWorkx");

                } else {

                    console.log("you are unauthorised user")
                }
            } else {

                console.log("Email doesn't exists, please register yourself")
            }

            break;

        case "2":
            console.log("In Progress");
            break;

        case "3":
            let name = prompt("Enter your name: ");
            let email = prompt("Enter your email: ");
            let role = prompt("Enter your role 1.Admin, 2. Employee : ");



            const admin = "Admin"
            const employee = "Employee"

            if (role === '1') {
                role = admin;
            }

            if (role === '2') {
                role = employee;
            }


            if (name && email && role) {

                const emailExists = users.some(user => user.email === email);


                if (!emailExists) {

                    const username = name.toLowerCase().replaceAll(" ", "_") + Date.now()

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



