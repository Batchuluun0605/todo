// // primitive types
let firstname = "hello";
console.log(typeof firstname);

// //special types type:any
let v: any;
v = "string";
v = true;
console.log(v);

// // array
let arr: [];
arr = [];
console.log(arr);

// // object types
let car: { type: string; model: string; year: number };
car = { type: "toyota", model: "corolla", year: 2009 };
console.log(car);

// union types
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

// functions type
function printHello(): void {
  console.log("Hello!");
}

printHello();

// casting type
let x: unknown = "hello";
console.log((x as string).length);
type usersType = {
  name: string;
  age: number;
};
const users: usersType[] = [
  {
    name: "orgil",
    age: 22,
  },
  {
    name: "joy doe",
    age: 88,
  },
];
console.log(users);
