const prompt = require("prompt-sync")();
const { products } = require("./data")

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
    let name = prompt("Enter Laptop Name: ");
    let findProducts = products.find((p) => p.name === name)

    if (findProducts || !name) {
        console.log("Product already exists!");
    } else {
        let brand = prompt("Enter Brand: ");
        let quantity = parseInt(prompt("Enter Quantity: "));
        let price = parseInt(prompt("Enter price: "));

        if (name && brand && quantity && price) {

            const productDetails = {
                name,
                brand,
                quantity,
                price
            }


            products.push(productDetails);
            console.log("all products: ", products)
            console.log("Products added successfully");
        } else {
            console.log("Enter proper data")
        }
    }
}

function viewAllProducts() {

    if (products.length > 0) {

        products.forEach((p,i,v) => {
            console.log(`${++i} name: ${p.name} | brand: ${p.brand} | Qty: ${p.quantity} | price: ${p.price}`);
            console.log(i)
            console.log(v)
        });
    } else {
        console.log("No Products found")
    }
}

function searchProduct() {
    if (products.length === 0) {
        console.log("No products exists to search")

    } else {
        const searchName = prompt("Enter products Name/brand to Search: ");
        const foundName = products.find(item => item.name.toLowerCase() === searchName.toLowerCase());
        const foundBrand = products.find(item => item.brand.toLowerCase() === searchName.toLowerCase());

        if (foundName || foundBrand) {
            if (foundName) {
                console.log(`Laptop Detail: ${foundName.name}| ${foundName.brand}|  Qty: ${foundName.quantity} | Price: ${foundName.price}`);
            } else {
                console.log(`Laptop Detail: ${foundBrand.name} | ${foundBrand.brand} | Qty: ${foundBrand.quantity} | Price: ${foundBrand.price}`);
            }

        } else {
            console.log("No Laptop found")
        }
    }
}

function updateProduct() {
    let name = prompt("Enter product name to update: ");


    let findProduct = products.find((p) => p.name === name);

    if (!findProduct) {
        console.log("Product not found.");
    } else {
        let newName = prompt("Enter new name:");
        let newBrand = prompt("Enter new brand:");
        let newQuantity = prompt("Enter new quantity");
        let newPrice = prompt("Enter new price:");


        if (newName) {
            products.name = newName;
        }
        if (newBrand) {
            products.brand = newBrand;
        }
        if (newQuantity) {
            products.quantity = parseInt(newQuantity);
        }
        if (newPrice) {
            products.price = parseFloat(newPrice);
        }

        console.log("Product updated successfully!");

    }
}

function removeProduct() {
    let name = prompt("Enter product name to remove: ");

    let findProductToRemove = products.findIndex((p) => p.name === name);

    if (findProductToRemove === -1) {
        return console.log("Product not found.");
    } else {
        products.splice(findProductToRemove, 1);
        console.log("Product removed successfully.")
    }

}

module.exports = { adminMenu, viewAllProducts, searchProduct, updateProduct, removeProduct };


