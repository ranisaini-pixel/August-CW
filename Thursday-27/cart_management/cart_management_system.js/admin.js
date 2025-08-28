const prompt = require("prompt-sync")();

function adminMenu(admin) {
    console.log(`\nWelcome ElectroMart Admin: ${admin.name}`);


    while (true) {
        console.log("Admin Menu")
        console.log("1. Add Product")
        console.log("2. View All Products")
        console.log("3. Search Product by Name")
        console.log("4. Update Product")
        console.log("5. Remove Product")
        console.log("6. Logout")

        let choice = prompt("Enter choice: ");
        switch (choice) {
            case "1": addProduct(); break;
            case "2": viewAllProducts(); break;
            case "3": searchProduct(); break;
            case "4": updateProduct(); break;
            case "5": removeProduct(); break;
            case "6":
                console.clear();
                return false;
            default: console.log("Invalid choice, try again.");
        }
    }
}

function addProduct() {
    console.log("In Progress");
}

function viewAllProducts() {
    console.log("In Progress");
}

function searchProduct() {
    console.log("In Progress");
}

function updateProduct() {
    console.log("In Progress");
}

function removeProduct() {
    console.log("In Progress");
}

module.exports = { adminMenu, viewAllProducts, searchProduct, updateProduct, removeProduct };
