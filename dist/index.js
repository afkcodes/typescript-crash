"use strict";
// Basic Types
let id = 5;
let company = "Megabyt";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, "ashish", true];
// Tuple
let person = [1, "Ashish", true];
// Tuple Array
let employee;
employee = [
    [1, "ashish"],
    [1, "Monchen"],
    [1, "shashi"],
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["up"] = "UP";
    Direction1["down"] = "Down";
    Direction1["right"] = "RIGHT";
    Direction1["left"] = "LEFT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up);
const user = {
    id: 1,
    name: "Ashish"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// customerId = true;  Error
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("hello typescript");
const user1 = {
    id: 1,
    name: "Chinchpokli",
    age: 25
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return 14;
    }
}
const ashish = new Person(1, "Ashish");
const monchen = new Person(1, "monchen");
console.log(ashish);
console.log(monchen);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "hola hola", "manager");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['a', 'b', 'c', 'd']);
strArray.push("ashish");
