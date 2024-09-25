//CONDITIONAL STATEMENT
const myBalance =3000;
const transaction = 3000;




// if (True) {
//     console.log("Yes");
// }

if (myBalance >= transaction) {
    console.log("Transaction successful");
}

const age = 25;
if (age >= 18){
    console.log("You are eligible to vote")
}

const password = 'e96896969@';
if(password.length >= 7 && password.includes("@")){
    console.log("Good password ")
}

//if else statement 

//if(condition){



//}

const age2 = 15;

if (age2 >= 18) {
  console.log("You are eligible to vote");
} else {
    console.log("You are ineligible to vote, you must be 18+")
}

//youth/underage 0-40 or aged41
const age3 =33;
if (age3 >=0 && age3 <=40){
    console.log("you are in the youth/underage category");
} else{
    console.log("You are in the aged category")
}


const number = 8;
if (number %2 === 0){
  console.log(" Even number");
} else{
    console.log("Odd number");
}   

const savings = 40000;
const transactionAmount = 400000;
if ( savings >= transactionAmount ){
    console.log("Successful");
} else {
    console.log("Insufficient fund");
}

let myNum = 98;

if (myNum > 0){
    console.log("This is a Positive number")
} else if (myNum < 0){
    console.log("This is a Negative number");

}else {
    console.log("this is zero")
}

//underage 0 -12 teens 13 -19 adults 20 agd

const age4 = 53;
if (age4 >= 0 && age4 <= 12) {
  console.log("underage");
} else if (age4 >=13 && age4 <=19){
  console.log("teen");
}else if (age4 >=20 && age4 <=40){
  console.log("adults");
} else if(age4 >= 41){
    console.log("aged category");
}else{
    console.log("invalid age, try again")
}



let grade = "a";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("very Good");
    break;

  case "C":
  case "c":
    console.log("Good");
    break;

  case "D":
  case "d":
    console.log("Fair");
    break;

  case "E":
  case "e":
    console.log("poor");
    break;

  case "F":
  case "f":
    console.log("Failed");
    break;

  default:
    console.log("Invalid Grade");
}