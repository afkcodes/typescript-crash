// Basic Types

let id: number = 5;
let company: string = "Megabyt"
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, "ashish", true];


// Tuple
let person: [number, string, boolean] = [1, "Ashish", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "ashish"],
  [1, "Monchen"],
  [1, "shashi"],
];

// Union
let pid: string | number;
pid = '22';

// Enum
enum Direction1 {
  up = "UP",
  down = "Down",
  right = "RIGHT",
  left = "LEFT",
}
console.log(Direction1.up);

// Objects
type User = { id: number, name: string }
const user: User = {
  id: 1,
  name: "Ashish"
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// customerId = true;  Error
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}

log("hello typescript");

// Interfaces

interface UserInterface { readonly id: number, name: string, age?: number }

const user1: UserInterface = {
  id: 1,
  name: "Chinchpokli",
  age: 25
}

// user1.id=25              Readonly

interface MathFunc {
  (x: number, y: never): number
}
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;



interface PersonInterface {
  id: number,
  name: string,
  register(): number
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name
  }
  register() {
    return 14
  }
}
const ashish = new Person(1, "Ashish");
const monchen = new Person(1, "monchen");

console.log(ashish);
console.log(monchen);


class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "hola hola", "manager");

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(['a', 'b', 'c', 'd']);

strArray.push("ashish");
