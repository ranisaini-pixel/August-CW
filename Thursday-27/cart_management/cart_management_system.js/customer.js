const prompt = require("prompt-sync")();

function customerMenu(customer) {
    console.log(`\nWelcome Customer: ${customer.name}`);

    while (true) {
        console.log("Customer Menu")
            console.log("1. About Me")
            console.log("2. See All Products")
            console.log("3. Search Product by Name")
            console.log("4. Add to Cart")
            console.log("5. View Cart")
            console.log("6. Update Cart Item Quantity")
            console.log("7. Remove from Cart")
            console.log("8. Apply Coupon")
            console.log("9. Checkout")
            console.log("10. Logout")

        let choice = prompt("Enter choice: ");
        switch (choice) {
            case "1": console.log(customer); break;
            case "2": viewAllProducts(); break;
            case "3": searchProduct(); break;
            case "4": addToCart(); break;
            case "5": viewCart(); break;
            case "6": updateCartQuantity(); break;
            case "7": removeFromCart(); break;
            case "8": applyCoupon(); break;
            case "9": checkout(); break;
            case "10": 
                console.clear();
                return false;
            
            default: console.log("Invalid choice, try again.");
        }
    }
}

function addToCart() {
    console.log("In Progree");
}

function viewCart() {
    console.log("In Progree");
}

function updateCartQuantity() {
    console.log("In Progree");
}

function removeFromCart() {
    console.log("In Progree");
}

function applyCoupon() {
    console.log("In Progree");
}

function checkout() {
    console.log("In Progree");
}

module.exports = { customerMenu };
