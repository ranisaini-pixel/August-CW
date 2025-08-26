// today I created a user Registeration system in which we have 4 options:

1. Login user as CW Admin
2. Login as Employee
3. Register yourself 
4. Exit

In 1st and 2nd option, we have to console In Progress....

in 3rd option register yourself, we have to take name, email and role from the user and then generate a username, after that add user to the users array and console User Register Successfully.

In last option simply exists 

I have used switch cases, array objects and if else to execute theh task 

In 3rd option, taken name, email and role form user via prompt then if the data is proper, I have generated using username
then created an object of user data added it to the users array and console Registeration succeassful. 

lastly exits.



//Admin task

for login user
Enter your email  -
scenario 1 - when email found with the incorrect role then show error message - "You are not authorized to login"
scenario 2 - when email not found then show error message - "Your not registered. Register yourself"
scenario 3 -  Everything goes well then onboard the user by clearing the console

const prompt = require('prompt-sync')();
console.clear();

let choice = 0;
let users = [];
let laptops = [];


function userNameGenerator(name) {
    const base = name.toLowerCase().replace(/[^\w]+/g, '');
    const randomNum = Math.floor(Math.random() * 1000);
    return base + randomNum;
}

function findUserByEmail(email) {
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
}

while (true) {
    console.log("Please select one option to proceed-");
    console.log("1. Login as CW Admin");
    console.log("2. Login as employee");
    console.log("3. Register yourself");
    console.log("4. Exit");

    choice = parseInt(prompt("Enter your choice: "));

    if (choice === 1) {
        const email = prompt("Enter your email: ");
        const user = findUserByEmail(email);

        if (!user) {
            console.log(" You are not registered. Register yourself.");
        continue;
        }

        if (user.role !== "Admin") {
            console.log(" You are not authorized to login.");
          continue;
        }

        console.clear();
        console.log(" Welcome to CW Admin");

        while (true) {
            console.log("1. Add Laptops");
            console.log("2. View All Laptops");
            console.log("3. Search Laptop by Name");
            console.log("4. Delete Laptop by Name");
            console.log("5. Logout");

            let adminChoice = parseInt(prompt("Enter your choice: "));

            if (adminChoice === 1) {
                const name = prompt("Enter Laptop Name: ");
                const brand = prompt("Enter Brand: ");
                const quantity = parseInt(prompt("Enter Quantity: "));

                if (name && brand && quantity > 0) {
                    laptops.push({name, brand, quantity});
                    console.log("Laptop added successfully!");
                } else {
                    console.log("Invalid input. Try again.");
                }

            } else if (adminChoice === 2) {
                if (laptops.length === 0) {
                    console.log(" No laptops available.");
                } else {
                    console.log("Laptop Inventory:");
                    laptops.forEach(laptop => {
                        console.log(${laptop.name} | ${laptop.brand} | Qty: ${laptop.quantity});
                    });
                }

            } else if (adminChoice === 3) {
                const searchName = prompt("Enter Laptop Name to Search: ");
                const found = laptops.find(l => l.name.toLowerCase() === searchName.toLowerCase());
                if (found) {
                    console.log("Laptop Detail:");
                    console.log(${found.name} | ${found.brand} | Qty: ${found.quantity});
                } else {
                    console.log("Laptop not found.");
                }

            } else if (adminChoice === 4) {
                const deleteName = prompt("Enter Laptop Name to Delete: ");
                const index = laptops.findIndex(l => l.name.toLowerCase() === deleteName.toLowerCase());

                if (index !== -1) {
                    laptops.splice(index, 1);
                    console.log("Laptop deleted successfully!");
                } else {
                    console.log("Laptop not found.");
                }

            } else if (adminChoice === 5) {
                console.clear();
                break;
            } else {
                console.log("Invalid choice.");
            }
        }

    } else if (choice === 2) {
        console.log("In progress...");

    }else if (choice === 3) {
        const name = prompt("Enter your name: ");
        const email = prompt("Enter your email: ");
        console.log("Select your role: ");
        console.log("1. Admin");
        console.log("2. Employee");
        let role = parseInt(prompt("Enter your role (1 or 2): "));

        if (role !== 1 && role !== 2) {
            console.log("Invalid role selected. Registration failed.");
        }

        const username = userNameGenerator(name);

     const duplicate = users.some(user => user.name.toLowerCase() === name.toLowerCase());
        if (duplicate) {
            console.log("Username already exists. Please try registering again.");
        } else {
            const newUser = {
                name,
                email,
                role: role === 1 ? "Admin" : "Employee",
                username
            };

            users.push(newUser);
            console.log("Registration successful. Please login.");
            console.log("Your generated username is:", username);
        }


    } else if (choice === 4) {
        console.log("Thank you for using the system. Exiting...");
        break;

    } else {
        console.log(" Invalid choice. Try again.");
    }
}