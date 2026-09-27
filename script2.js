let name = "Venkatesh";
console.log(typeof name);

let age = 22;
console.log(age);
console.log(typeof age);

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

let value;
console.log(value);
console.log(typeof value);

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

let stringValue = "Hello";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log(stringValue);
console.log(numberValue);
console.log(booleanValue);
console.log(undefinedValue);
console.log(nullValue);

let qualification = "B.Tech CSE";
console.log(typeof qualification);

let salary1 = 30000;
console.log(typeof salary1 === "number");

let stringNumber = "100";
let actualNumber = 100;

console.log(typeof stringNumber);
console.log(typeof actualNumber);

let personName = "Venkatesh";
let personAge = 22;
let personQualification = "B.Tech CSE";
let workingStatus = true;

console.log(personName, typeof personName);
console.log(personAge, typeof personAge);
console.log(personQualification, typeof personQualification);
console.log(workingStatus, typeof workingStatus);

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);

let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);

let mobileBrands = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];
console.log(mobileBrands[mobileBrands.length - 1]);

let numbers2 = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers2[numbers2.length - 2]);

let favoriteFoods = ["Biryani", "Pizza", "Burger", "Dosa", "Chicken"];
console.log(favoriteFoods[0]);
console.log(favoriteFoods[2]);
console.log(favoriteFoods[favoriteFoods.length - 1]);

let cricketers = ["Dhoni", "Virat", "Rohit", "Jadeja", "Bumrah"];
console.log(cricketers[3]);

let toys = ["Car", "Robot", "Ball", "Doll", "Train"];
console.log(toys[toys.length - 1]);

let values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);

let mixedArray = ["Apple", "Car", "Dhoni", "Banana", "Robot"];
console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);

let person = {
    name: "Venkatesh",
    age: 22,
    city: "Hyderabad"
};

console.log(person);

let student = {
    name: "Venkatesh",
    qualification: "B.Tech CSE",
    company: "Stackly"
};

console.log(student.company);

let fruitObject = {
    fruits: ["Apple", "Banana", "Mango", "Orange"]
};

console.log(fruitObject.fruits[1]);

let toyObject = {
    toys: ["Car", "Robot", "Ball", "Doll"]
};

console.log(toyObject.toys[toyObject.toys.length - 1]);

let cricket = {
    cricketer: "Dhoni",
    team: "CSK"
};

console.log(cricket.cricketer);

let details = {
    fruitName: "Mango",
    toyName: "Car",
    cricketer: "Virat"
};

console.log(details.fruitName);
console.log(details.toyName);
console.log(details.cricketer);

let college = {
    students: ["Venkatesh", "Rahul", "Arun"],
    courses: ["JavaScript", "Python", "Java"]
};

console.log(college.students[0]);
console.log(college.courses[1]);

let mobile = {
    mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]
};

console.log(mobile.mobile[2]);

let employee = {
    employeeName: "Venkatesh",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 1
};

console.log(employee.skills[1]);

let personalInformation = {
    name: "Venkatesh",
    age: 22,
    city: "Hyderabad",
    qualification: "B.Tech CSE",
    country: "India"
};

console.log(personalInformation.name);
console.log(personalInformation.age);
console.log(personalInformation.city);

let a1 = 20;
let b1 = 10;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);

let a2 = 25;
let b2 = 7;

console.log(a2 % b2);

console.log(2 ** 5);

let a3 = 20;
let b3 = 5;

console.log(a3 + b3);
console.log(a3 - b3);
console.log(a3 * b3);
console.log(a3 / b3);
console.log(a3 % b3);
console.log(a3 ** b3);

let number3 = 10;
number3 = number3 + 5;
console.log(number3);

let number4 = 10;
console.log(++number4);

let number5 = 10;
console.log(number5++);

let number6 = 20;
console.log(--number6);

let number7 = 20;
console.log(number7--);

let preNumber = 10;
let postNumber = 10;

console.log(++preNumber);
console.log(postNumber++);
console.log(preNumber);
console.log(postNumber);

let a4 = 20;
let b4 = 10;

a4 += b4;
console.log(a4);

let a5 = 50;
let b5 = 20;

a5 -= b5;
console.log(a5);

let a6 = 10;
let b6 = 5;

a6 *= b6;
console.log(a6);

let a7 = 100;
let b7 = 10;

a7 /= b7;
console.log(a7);

let a8 = 25;
let b8 = 4;

a8 %= b8;
console.log(a8);

let x = 20;
let y = 10;

console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

let number8 = 10;
let stringNumber2 = "10";

console.log(number8 == stringNumber2);
console.log(number8 === stringNumber2);

let condition1 = 20 > 10;
let condition2 = 30 > 20;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);

let age5 = 22;
console.log(age5 >= 18 ? "Eligible" : "Not Eligible");

let marks = 80;
console.log(marks >= 35 ? "Pass" : "Fail");