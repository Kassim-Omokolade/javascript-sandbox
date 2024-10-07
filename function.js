//functions
//function declaration
function greeting() {
 console.log("welcome to our App")
}
//invoked / called
greeting();
greeting();

function speak(){
    console.log("hello class")
}

speak();

//functions can take parimeters

function specialGreeting(name = "user"){
    console.log(`${name}, Welcome to our App`)
}

specialGreeting("Timi");
specialGreeting("Goodness");

//default parameters
specialGreeting();

// write a finctiom that logs the addition of two numbers
function addTwoNums(num1, num2 , num3){
    const result = num1 + num2 +num3;
    console.log(result);
}

addTwoNums(9, 5,7);
addTwoNums(-10,7,3);

// checks if a number is either positive or negative  or zero 

function checkNum(num){
    if (num > 0){
        console.log(`${num} is positive`);
    } else if (num < 0){
        console.log(`${num} is negative`);
    } else{
        console.log("This is Zero");
    }
}

checkNum(10);
checkNum(-10);
checkNum(0);

//function expression 
 myFunction1();
function myFunction1(){
    console.log("This is a function declaration");

}

const myfunction2 = function(){
     console.log("This is a func expression");
}
myfunction2();
//hoisting - moves all f the function delclaration up the script

//returm the key word
// write a fucntion that calculates the  product of the nums

const  productOfTwoNums = function (num1, num2){
    return num1 * num2;
};
const result = productOfTwoNums(9 , 2);
console.log(`The result is ${result}`);

//write a function that converts km to meter
//7km - 7 * 1000

const kmToMeters = function(value){
    const meter  = value * 1000;
    return `${value}km is equal to ${meter}m`
}
console.log(kmToMeters(6));

//write a fuction that calculate the avarage of three numbers and returns the average 

const aveOfTwoNum = function( n1 , n2 , n3 ){
      const averesult = (n1 +n2+ n3)/3;
      return averesult;
}

console.log(aveOfTwoNum(8,8,6))

//write a function that calculate the age of user and the function should take in year of birth as a parameter

const userAge = function(yearOfBirth ){
    return 2024 - yearOfBirth;
};

console.log(userAge(1960));

// write a funtion that check if a number is even or odd

const checkNumber = function (number){
    if (number % 2 == 0 ){
      return "this is an even number "
    } else {
        return "This is an odd number"
    }
  
};

 console.log(checkNumber(8));

//  const results = checkNumber(8);
// console.log(`${results} is positive`);

let savings = 8900;

function checkWithdrawal(amount) {
  if (amount < savings) {
    savings -= amount;
    return `withdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return `Insufficient funds`;
  }
}

// console.log(checkWithdrawal(70000));
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

console.log(`my current saving is ${savings}`);

// const checkWithdrawal = function (amount) {
//   if (amount < savings) {
//     savings -= amount;
//     return `withdrawal of ${amount} is successful and my balance is ${savings}`;
//   } else {
//     return `Insufficient funds`;
//   }
// }

// // console.log(checkWithdrawal(70000));
// console.log(checkWithdrawal(6500));
// console.log(checkWithdrawal(2000));

// console.log(`my current saving is ${savings}`);

const depositAmount = function (amount){
    savings += amount;
      return `deposit of ${amount} is successful and balance is ${savings}`
    
};

console.log(depositAmount(10800));
console.log(checkWithdrawal(200));






//build a simple atm machine
let userPin = 1234;
let saving = 40000;

// writ a function that checks the enterpin

const checkPin = function (enteredpin) {
  if (enteredpin === userPin) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPin(1234));

const withdraw = function (amount) {
  if (checkPin(1234)) {
    if (saving > amount) {
      saving -= amount;
      console.log(
        `the withdrawal of ${amount} is successful and balance is ${saving}`
      );
    } else {
      console.log("insufficient");
    }
  } else {
    console.log("Incorrect pin, try again");
  }
};

withdraw(5000);

const depositAmounts = function (amount) {
  if (checkPin(1234)) {
    saving += amount;
    console.log(
      `the deposit of ${amount} is successful and balance is ${saving} `
    );
  } else {
    console.log("incorrect pin, try again");
  }
};

depositAmounts(1000);
withdraw(500);
depositAmounts(100000)

// write a function that check balance
 const balance =function (){
   if (checkPin(1234)) {
     console.log( `your current balance is ${saving}`);
   }else{
    console.log("incorrect pin,try again")
   }
 }

 balance();

 //write a function that checks the number of attempt
// write a function that checks number of attempt on the pin,
//max attempt is 3 , card should be blocked
let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (blocked) {
    console.log("Your Card is Blocked");
    return;
  }
  if (checkPin(1234)) {
    console.log("Perform Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your Card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();






// const checkCardAttempt = function () {
//   if (checkPin(1234)) {
//     console.log("perform transaction");
//   } else {
//     if (!blocked) {
//       attempt++;
//       console.log(`Incorrect Pin, ${3 - attempt} attempt left`);
//     }
//     if (attempt === 3) {
//       console.log("your card is blocked");
//       blocked = true;
//     }
//   }
// };
// checkCardAttempt();
// checkCardAttempt();
// checkCardAttempt();
// checkCardAttempt();

//  if (checkPin(1235)) {
//    console.log("perform transaction");
//  } else {
//    attempt++;
//    console.log(`incorrect PictureInPictureEvent,${3 - attempt}left`);

//    if (attempt >= 3) {
//      console.log("yor card is blocked");
//    }
//  }



// write a function that checks if a gmail is valid or not 

// const emailCheck= function (value){
//   if (value.includes(@){
//     console.log("Email is Valid");
//   } else{
//     console.log("invalid email");
//   }
// }
// emailCheck("kassim")


// const myFunction = (p1,p2)=>{

// }

const emailCheck = function (value) {
  if (value.includes("@")) {
    console.log("Email is Valid");
  } else {
    console.log("invalid email");
  }
};
emailCheck("kassim");

// const emailCheck = (value)=> value.includes("@") ? "email valid" : " invalid email"

// console.log(emailCheck("kassim@"))
  



// writa an arrow fumction to check if a password is wrong or not minimum of 7

const passwordCheck = (value) => {
   (value.length >=7) {
    console.log("password is long enough");
  }else{
    console.log("Short Password");
  }
};

passwordCheck("password");

// const passwordCheck2 = (value) =>
//   value.length >= 7 ? "password is lon enough" : "password is short";



console.log(passwordCheck2("pass"));

// const calcAverage = (num1,num2) => {
//   return (num1 + num2)/2;
// };

const calcAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calcAverage(8, 5));

const kmToMetersAgain = (value) => `${value} km is equal to ${value * 1000}m`;

console.log(kmToMetersAgain(8));

// SCOPING GLOBAL LOCAL
const globalVar = "EXAMPLE";
const num5 = 90;

const example = () => {
  console.log(globalVar);

  const myValue = 90;
  console.log(myValue);
};

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};
seeBalance();
console.log(mySavings);

const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
};
const func2 = () => {
  const num = 12;
  console.log(num);
};
console.log(num);

//write a function that takes in a string as parameter and returns the strinhg in all vapital letter

const capitalizeStr = (value) => value.toUpperCase();
console.log(capitalizeStr("mart"));

// write a javascript function that accepts a string as a parameter and converts the first latter of the word to uppercase
const capitalizeFirstLetter = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1);
console.log(capitalizeFirstLetter("david"));

//write a function that accepts an argument and return the datatype.
const checkDataType = (arg) => typeof arg;
console.log(checkDataType(true));
//write a fucntion that returns whether a number is even or odd.

const evenOrOdd = (number) => (number % 2 === 0 ? "even" : "odd");

console.log(evenOrOdd(8));

//write a function named minutesTohours that receives a number of minutes as parameter
// and returns a number representing the same amount of time but in hours

const minutesToHours = (value) => value / 60;

console.log(minutesToHours(60));

//write a function called longestString that receives two string as parameters
//and returns the longest of the two strings

const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);

console.log(longestString("kassim", "dog"));

const concat = (str1, str2, str3, sep) => str1 + sep + str2 + sep + str3;

console.log(concat("ade", "bola", "kola", "-"));

//write a function that returns the square of a number

const square = (num4) => num4 ** 2;
console.log(square(9));

//write a function called chequeLoanEligibilty which receive an amount as parimeter and returns
//whether a user is eligible or not base on the criteria which is
//the loan amount can not be more than twice of savings

let savings = 60000;
console.log(savings);
// 45000, 200000 ,70000

// const chequeLoanEligibilty = (amount)=> {
//   if (amount > savings*2){
//     return("not eligible")
//   } else{
//     return ("eligible")
//   }
// }

// console.log(chequeLoanEligibilty(30000))

const chequeLoanEligibilty = (amount) =>
  amount < savings * 2 ? "eligible" : "noteligible";

console.log(chequeLoanEligibilty(40000));

//write a function that logs hello world to the console
// const firstName = ()=>{

//   console.log("hello world");
// }

// firstName();

const firstName = () => console.log("hello world");
firstName();

const number = () => {
  return 34;
};
console.log(number());

//write a function that returns the number of vowel in a string
const countNumberOfVowels = (str) => {
  let vowels = "aeiou";
  let numberOfVowels = 0;
  const lowerCaseStr = str.toLowercase();
  //loop ovcer the lowerCaseStr
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
      numberOfVowels++;
    }
  }
  return numOfVowels;
};

console.log(countNumberOfVowels("hello world"));
