const prompt = require("prompt-sync")();

let cart = [];
let store_name = "My Store";

console.log(`Welcome to ${store_name}`);

while (true) {
  console.log(`
1. Enter item name to add in cart
2. Display the cart items with serial no.
3. Total items
4. Delete the last item
5. Delete the first item
6. Enter the name to delete it
7. Exit
`);

  let choice = prompt("Enter your choice: ");


  switch (choice) {
    case "1":
      let item = prompt("Enter item name: ");
      console.log(item,"25")
      if (item) {
        cart.push(item);
        console.log(`${item} added to cart.`);
      } else {
        console.log("Item name cannot be empty.");
      }
      break;

    case "2":
      if (cart.length === 0) {
        console.log("Cart is empty.");
      } else {
        console.log("Cart items:");
        cart.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
      break;

    case "3":
      console.log(`Total items in cart: ${cart.length}`);
      break;

    case "4":
      if (cart.length > 0) {
        let removed = cart.pop();
        console.log(`${removed} removed from cart.`);
      } else {
        console.log("Cart is already empty.");
      }
      break;

    case "5":
      if (cart.length > 0) {
        let removed = cart.shift();
        console.log(`${removed} removed from cart.`);
      } else {
        console.log("Cart is already empty.");
      }
      break;

    case "6":
      let name = prompt("Enter item name to delete: ");
      let index = cart.indexOf(name);
      if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${name} deleted from cart.`);
      } else {
        console.log(`${name} not found in cart.`);
      }
      break;

    case "7":
      console.log("Exiting... Thank you for visiting!");
      process.exit();

    default:
      console.log("Invalid choice, please try again.");
  }
}

