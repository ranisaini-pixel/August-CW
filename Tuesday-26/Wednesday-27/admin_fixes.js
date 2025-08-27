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

let users = [{
    name: "Rani saini",
    email: "rani@gmail.com",
    role: "Admin",
    username: "rani_saini345"
}];

let laptop = [
    { name: 'er', brand: 'rr', quantity: 3 },
    { name: 'tt', brand: 'gh', quantity: 4 }
];

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


            const emailExists = users.find((u) => u.email === userEmail);

            if (emailExists) {

                const verifyRole = emailExists.role;

                if (verifyRole === "Admin") {

                    console.clear();
                    console.log("Your are Authorised, Login successful");
                    console.log("Welcome to CodingWorkx");

                    while (true) {

                        console.log("1. Add Laptops");
                        console.log("2. View All Laptops");
                        console.log("3. Search Laptop by Name");
                        console.log("4. Delete Laptop by Name");
                        console.log("5. Logout");

                        let adminChoice = (prompt("Enter your choice: "));

                        switch (adminChoice) {

                            case "1":

                                let name = prompt("Enter Laptop Name: ");
                                let brand = prompt("Enter Brand: ");
                                let quantity = parseInt(prompt("Enter Quantity: "));

                                if (name && brand && quantity) {

                                    const laptopDetails = {
                                        name,
                                        brand,
                                        quantity
                                    }


                                    laptop.push(laptopDetails);
                                    console.log("all laptops: ", laptop)
                                    console.log("Laptops added successfully");
                                } else {
                                    console.log("Enter proper data")
                                }
                                break;



                            case "2":
                                if (laptop.length > 0) {

                                    laptop.forEach(l => {
                                        console.log(`${l.name} | ${l.brand} | Qty: ${l.quantity}`);
                                    });
                                } else {
                                    console.log("No Laptops found")
                                }
                                break;

                            case "3":
                                const searchName = prompt("Enter Laptop Name to Search: ");
                                const found = laptop.find(item => item.name.toLowerCase() === searchName.toLowerCase());

                                if (found) {
                                    console.log(`Laptop Detail: ${found.name} ${found.brand} Qty: ${found.quantity}`);

                                } else {
                                    console.log("No Laptop found")
                                }

                                break;

                            case "4":

                                const searchNameToDelete = prompt("Enter Laptop Name to delete: ");
                                const laptopExists = laptop.find((l) => l.name === searchNameToDelete);
                                if (laptopExists) {

                                    if (searchNameToDelete) {
                                        const filteredLaptop = laptop.filter(obj => obj.name !== searchNameToDelete);

                                        laptop = filteredLaptop;
                                        console.log("all laptop", filteredLaptop)
                                    } else {
                                        console.log("Laptop not deleted");
                                    }
                                } else {
                                    console.log("Laptop not found");
                                }

                                break;


                            case "5":
                                console.clear()
                                console.log("Logout")

                                break;

                            default:
                                console.log("Invalid choice")
                        }
                    }

                } else {

                    console.log("you are unauthorised user")
                } ``
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


            if (name && email) {

                const emailExists = users.some(user => user.email === email);


                if (!emailExists) {

                    let role = prompt("Enter your role 1.Admin, 2. Employee : ");

                    const admin = "Admin"
                    const employee = "Employee"

                    if (role === '1') {
                        role = admin;
                    }

                    if (role === '2') {
                        role = employee;
                    }

                    const username = name.toLowerCase().replaceAll(" ", "_") + Math.floor(Math.random() * 1000);

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



