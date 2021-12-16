document.getElementById("btn").onclick = function () {
    alert("Umair")
}

function toMiles(value) {
    var km = value
    var result = km * 0.621371
    document.getElementById("result").innerHTML = "<span style='text-align: center;'>Miles = </span>" + result;
}

// toMiles(10)

function alertUserName(value1, value2) {
    var firstName = value1
    var lastName = value2

    var fullName = firstName + " " + lastName
    alert("user full name " + fullName)
}

// alertUserName("Ahsan", "Ali")

function addTwoNumbers() {
    var value1 = prompt
    document.getElementById("result").innerHTML = value1 + value2
    // alert(value1 + value2)
}

// addTwoNumbers()

console.log("1" == 2) // Equality Operator
console.log("1" != 2)
console.log("2" === 2)
console.log("2" !== 2)
console.log(2 > 1)
console.log(1 < 2)
console.log(2 >= 2)
console.log(2 <= 2)
console.log(typeof 2)

if (2 >= 2 || 2 < 2) {
    console.log("if condition true with OR operator")
}
if (2 >= 2 && 2 <= 2) {
    console.log("if condition true with AND operator")
}
if ("1" != 2) {
    console.log("if condition true with not equal operator")
}

// Data Types

// var umair;
console.log("umair")
console.log(9)
console.log(true || false)
console.log(undefined)
var umair = null;
console.log(umair)

var cities = [];
var faisalabad = {
    area: 7212345,
    province: "",
    population: 123456,

}

faisalabad.area = 123
faisalabad.area1 = 1234
delete faisalabad.population
console.log(faisalabad.area)
console.log(faisalabad)






















