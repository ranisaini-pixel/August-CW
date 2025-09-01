const prompt = require("prompt-sync")();
const { users } = require("./data");
const { adminMenu } = require("./admin");
const { customerMenu } = require("./customer");

function register() {
  let name = prompt("Enter your name: ");
  let email = prompt("Enter your email: ");
  let role = prompt("Enter role (admin/customer): ").toLowerCase();

  if (!["admin", "customer"].includes(role)) {
    console.log("Invalid role! Registration failed.");
  }

  if (users.find((u) => u.email === email)) {
    console.log("User already exists!");
  }

  users.push({ name, email, role });
  console.log("Registration successful!", users);
}

function login(role) {
  let email = prompt("Enter your email: ");
  let user = users.find((u) => u.email === email && u.role === role);

  if (!user) {
    console.log("---- Invalid credentials or role.");
    return;
  }

  if (role === "admin") {
    adminMenu(user);
  } else {
    customerMenu(user);
  }
}


module.exports = { register, login };





