//Type conversion and coercion

// const firstNum = prompt("Enter first number");
// const secondNum = prompt("Enter first number");

// const total = parseInt(firstNum) + number(secondNum);
// console.log(total);

//string to a number
const myStr = "90"
console.log(typeof myStr);
//number constructor, parseint
const convertedStr = parseInt(myStr);
console.log(typeof convertedStr);

//number to a string
const myNum = 89;
console.log(typeof myNum)

//string
const convertedNum = String(myNum);
console.log(typeof convertedNum);

//type coercion
const a = "6";
const b = 7;
console.log(a - b);
console.log(a + b);
console.log(a / b);
console.log(a * b);