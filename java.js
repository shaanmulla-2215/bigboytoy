// Variable Declarations and Data Types
let num = 20;
console.log(num);
console.log(typeof num);

let name = "ana";
console.log(name);
console.log(typeof name);

let isPresent = true;
console.log(isPresent);
console.log(typeof isPresent);

let colors = ["blue", "pink"];
console.log(colors);
console.log(typeof colors);

let robot = {
    name: "Alexa",
    age: 25,
};
console.log(robot);
console.log(typeof robot);

let age = null;
let num1;
console.log(typeof age); // "object"
console.log(typeof num1); // "undefined"

age = 40;
console.log(age);

// Variable Scope (var vs let)
var agee = 20;
console.log(agee);
var agge = 40;
console.log(agge);
aage = 60; // Implicitly global variable
console.log(aage);

let num2 = 55;
console.log(num2);
num3 = 78; // Implicitly global variable
console.log(num3);

const pi = 3.142;
console.log(pi);

// Arithmetic Operations
let a = 50;
let b = 30;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(a--);
console.log(a * b);
console.log(a ** b);

// Assignment Operators
let c = 30;
let d = 60;
c += d;
console.log(c);

// Logical Operators
let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);

// Comparison Operators
let e = 20;
let f = 55;
console.log(e == f);
console.log(e != f);
console.log(e < f);
console.log(e > f);
console.log(e <= f);
console.log(e >= f);
console.log(e === f);

// String Operations
let firstName = "Bhoomika";
let lastName = "N";
console.log(firstName);
console.log(firstName.length);
console.log(firstName.indexOf('o'));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.concat(' ', lastName));
console.log(firstName.slice(0, 6));
console.log(firstName.charAt(2));
console.log(firstName.startsWith('k'));
console.log(firstName.endsWith('o'));
console.log(firstName.lastIndexOf('o'));
console.log(firstName.includes('o'));
console.log(firstName.substring(0, 3));
console.log(firstName.split('m'));
console.log(firstName.replace('a', 's'));

// Array Operations
let Firstname = ['Nicole', 'Pham', 'Laeno'];
console.log(Firstname);
console.log(Firstname.length);
console.log(Firstname[0]);
console.log(Firstname.indexOf('Pham'));
console.log(Firstname.includes('Pham'));
console.log(Firstname.push("Mike"));
console.log(Firstname.pop());
console.log(Firstname.shift());
console.log(Firstname.unshift('Mike'));
console.log(Firstname.slice(0, 1));
console.log(Firstname.reverse());
console.log(Firstname.splice(0, 2));
console.log(Firstname.concat(['Nicole', 'Noelle']));

// Functions
function hello() {
    console.log("Good morning");
}
hello();

function hello(name) {
    console.log("Good morning " + name);
}
hello("Ana");

function add(a, b) {
    return a + b;
}
console.log(add(20, 80));

let div = function (t, r) {
    return t / r;
};
let finalresult = div(23, 56);
console.log(finalresult);

let sub = (p, q) => {
    return p - q;
};
let ans = sub(52, 69);
console.log(ans);

// Object Manipulation
let person = {
    name: 'josh',
    age: 30,
};
console.log(person);
console.log(person.name);
person.name = "krish";
console.log(person);

// If-Else Statement
let hour = new Date().getHours();
if (hour < 18) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

// Switch Case
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary Operator
let ageCheck = 20;
let result = ageCheck >= 18 ? "You are an adult" : "You are a minor";
console.log(result);

// Loops

// For Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// While Loop
console.log("While Loop:");
let counter = 1;
while (counter <= 5) {
    console.log("Iteration " + counter);
    counter++;
}

// Do-While Loop
console.log("Do-While Loop:");
let count = 1;
do {
    console.log("Iteration " + count);
    count++;
} while (count <= 5);

// For-Each Loop (Array)
let numbers = [10, 20, 30, 40, 50];
console.log("For-Each Loop:");
numbers.forEach((num) => {
    console.log(num);
});

// For-In Loop (Object)
console.log("For-In Loop:");
let user = { name: "John", age: 25, city: "New York" };
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// For-Of Loop (Array)
console.log("For-Of Loop:");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}