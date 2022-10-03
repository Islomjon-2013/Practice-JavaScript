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
