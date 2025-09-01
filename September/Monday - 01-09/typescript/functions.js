// function addTwo(num) { //num gives error of any
//     return num + 2;
// }
// addTwo("5")
//so we have to assign type
function addThree(num) {
    // num.toUpperCase()//not allowed
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, isLoggedIn) { }
//arrow function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // isPaid:boolean=false is default value
// in case real args is not passed
addThree(3);
getUpper("hi");
signUpUser("rani", "rani@gmail.com", false);
loginUser("gds", "ff@f.com");
