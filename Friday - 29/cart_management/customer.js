const { users, products, cart, coupons } = require("./data");
const { viewAllProducts, searchProduct } = require("./admin")

const prompt = require("prompt-sync")();

function customerMenu(customer) {
     console.log(`\nWelcome ElectroMart Employee: ${customer.name}`);

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
            case "1": aboutMe(); break;
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

function aboutMe() {

    let emp = prompt("Enter your email: ");
    const findEmp = users.find((u) => u.email === emp);


    if (findEmp) {

        const verifyRole = findEmp.role;

        if (verifyRole === "customer") {

            console.log("Welcome Customer:", findEmp)
        }

    } else {
        console.log("You are not registered")
    }


}

function addToCart() {
    let name = prompt("Enter product name to add: ");
    let product = products.find((p) => p.name === name);
    if (!product) {
        console.log("Product not found.");
    } else {
        let existing = cart.find((c) => c.name === product.name);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        console.log("Product added to cart.", cart);
    }
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
    } else {
        console.log("\nYour Cart:");
        cart.forEach((c, i) =>
            console.log(`${i + 1}. ${c.name} - $${c.price} x ${c.quantity}`)
        );
    }
}

function updateCartQuantity() {
    let name = prompt("Enter product name to update quantity: ");
    let item = cart.find((c) => c.name === name);
    if (!item) {
        console.log("Item not in cart.");
    } else {
        item.quantity = parseInt(prompt("Enter new quantity: "));
        console.log("Cart updated successfully.");
    }
}

function removeFromCart() {
    let name = prompt("Enter product name to remove: ");
    let index = cart.findIndex((c) => c.name === name);
    if (index === -1) {
        console.log("Item not found in cart.");
    } else {
        cart.splice(index, 1);
        console.log("Item removed from cart.");
    }
}

function applyCoupon() {
    let code = prompt("Enter coupon code: ");
    let coupon = coupons.find((c) => c.code === code);
    if (!coupon) {
        console.log("Invalid coupon.");
    } else {
        let total = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
        let discount = (total * coupon.discount) / 100;
        console.log(`Coupon applied! You saved $${discount}`);
    }
}

function checkout() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
    } else {
        let total = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
        console.log(`Your total is $${total}. Checkout complete!`);
        cart.length = 0;
    }
}

module.exports = { customerMenu };
