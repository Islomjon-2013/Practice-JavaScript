let name1 = "Ibrohim";
console.log(name1);
//data types
let firstName = "hulkaroy"; //string
age = 31; //number
isMarried = true; //boolean
console.log(age);
//objects
let fruits = {
  dry: "nut",
  wet: "apple",
};
console.log(fruits.dry);
//arrays
colors = ["green", "white", "red"];
colors[3] = ["moviy"];
console.log(colors[3]);

//function
function greet(name2, lastName) {
  console.log("hello," + name2 + lastName);
}
greet("Hulkar", "Siddikova");

function square(number) {
  return number * number;
}
let squareResult = square(2);
console.log(squareResult);

//operators
//arifmetik;
/*let x = 2;
y = 3;
console.log(x + y);/'
/'
;'/'/
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x++);
console.log(--x);
Assignment operators
x += 3;// x = x + 3
console.log(x);*/

//Comparison Operators

let x = 5;
//console.log(x >= 1);
console.log(x === 1);
console.log(x !== 1);
//ternary operators
let points = 70;
let result = points > 60 ? "passed" : "fail";
console.log(result);

//logic operators
//&&  va || yoke   !emas[';[/'/']]
//&&
console.log(true && true);
let hour = 9;
let minute = 20;
isOfficeOpen = hour >= 9 && minute >= 0;
console.log(isOfficeOpen);

// ||
console.log(true || false);
// !
let isOfficeClosed = !isOfficeOpen;
console.log(isOfficeClosed);
let color1 = "qora";
let color2 = "oq";
console.log(color1);
console.log(color2);
let box = color1;
color1 = color2;
color2 = box;
console.log(color1, color2);
//if and else
let hour1 = 10;
if (hour1 >= 6 && hour1 < 12) {
  console.log("hayrli tong");
} else console.log("hayrli tun");

//switch and case
let word = "pencil";
switch (word) {
  case "pencil":
    console.log("qalam");
    break;

  case "pen":
    console.log(ruchka);
    break;

  default:
    console.log("nomalum so'z");
}
//loops
for (let i = 0; i < 5; i++) {
  console.log("salom");
}
//toq sonlarni chiqarish un.
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) console.log(i);
}
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
let j = 0;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);
//break va continue
//let i=0;
while (i <= 10) {
  if (i === 7) break;
  console.log(i);
  i++;
}

// fon in and for of loops
const person = {
  name3: "hurshida",
  hobbies: "football",
};
for (let key in person);
console.log(person.name3);
const animal = ["wolf", "rabbit", "bear"];
for (let index in animal) console.log(index, animal[index]);
//fizzBuzz
function fizzBuzz(input) {
  if (typeof input !== "number") return "son emas";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0 && input % 5 === 0) return "fizzBuzz";
  return "input";
}
let results = fizzBuzz(15);
console.log(results);
//agar input 3 ga bo'linsa fizz qaytsin
//agar input 5ga bo'linsa buzz qaytsin
//agar input 3 va 5 ga bo'linsa fizzbuzz qaytsin
//agar input 3 va 5ga bolinmasa o'sha sonni o'zi qaytsin
//agar input son bolmasa son emas deb qaytsin

//practice
function gitMax(a, b) {
  if (a > b) return a;
  else return b;
}
let number = gitMax(2, 4);
console.log(number);

function isLandscape(height, width) {
  return width > height;
}
console.log(isLandscape(20, 20));
//obyektdan clone olish

const circle = {
  radius: 1,
  draw() {
    console.log("doira");
  },
};
//birinchi usul
//const clone = {};
//for (let key in circle) clone[(key = circle[key])];

//ikkinchi usul
//const clone = Object.assign({}, circle);
//console.log(clone);
//3 -usul
const clone = { ...circle };
console.log(clone);
//math va string obyektlari
let greeting = "Assalomu alaykum";
console.log(greeting.length);
console.log([2]);
console.log(greeting.includes("al"));
console.log(greeting.startsWith("Ass"));
console.log(greeting.indexOf("kum"));
console.log(greeting.replace("salom", "salam"));
console.log(greeting.trim());
console.log(greeting.split(""));
//arrays

let raqam = [3, 4];
raqam.push(5, 6);
raqam.unshift(1, 2);
raqam.splice(2, 0, 2);
raqam.indexOf(3);
console.log(raqam);
console.log(raqam.indexOf(4));
//elimentni o'chirish
raqam.pop();
raqam.shift();
console.log(raqam);
//to'plamlarni birlashtirish
let first = [1, 2, 3];
let second = [4, 5, 6];
let combaned = first.concat(second);
console.log(combaned);
//to'olamni ajratish
let sliced = combaned.slice(2, 4);
console.log(sliced);
