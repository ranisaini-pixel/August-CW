const prompt = require("prompt-sync")();
const { register, login } = require("./auth");


function mainMenu() {
    
    let Exists = true;
    while (Exists) {
        console.log("Welcome to ElectroMart. Please select one option to proceed -")
        console.log("1. Login as Admin")
        console.log("2. Login as Customer")
        console.log("3. Register Yourself")
        console.log("4. See All Products")
        console.log("5. Exit")

        let choice = prompt("Enter choice: ");
        switch (choice) {
            case "1": login("admin"); break;
            case "2": login("customer"); break;
            case "3": register(); break;
            case "4": viewAllProducts(); break;
            case "5":
                console.clear()
                Exists = false;
                console.log("Exiting.....")
                break;
            default: console.log("Invalid choice, try again.");
        }
    }
}

mainMenu();

module.exports = { mainMenu }



