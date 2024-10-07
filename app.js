const getFulllName = (firstName,lastname)=> `${firstName} ${lastname}`;
getFulllName("john", "doe");

const getmax = (n1,n2)=>(n1>n2 ? n1 : n2);
getmax(98,67);

// Arrays - are complex data type [] and they can hold more than data
//[element1,element2]
const mixedArr = [9, "str", true, 65, 9.8, null, [90, false]];



const students = ['goodness','aisha','adura']
console.log(students);

//ARRAY PROPERTIES(LENGHT)
console.log(students.length);

//getting element in an array-position arrname[position]
console.log(students[0])

//change element in an array
students[1]= "Aishat";
console.log(students);

//Array Methods
//adding and removing els from an array push pop shift and unshift 
//LIFO

students.push("therasa")
students.push("Eniola");
students.pop();

students.unshift("adebayo");
students.unshift("timi");

students.shift();
console.log(students)


//convert array to a string (toString, join)
console.log(students.toString());
console.log(students.join("-"));

const onlineStudents = ["john", "peter", "paul"];
const weekdayStudents = ["ade", "susan", "joy"];
const allStudents = onlineStudents.concat(weekdayStudents,["ruth", "gift"]);
console.log(allStudents);

//includes
console.log(onlineStudents.includes("paul"));

//sort ,reverse 
const carBrands = ['toyota', 'lexus', 'bmw','audi','chevrolet'];
console.log(carBrands);
console.log(carBrands.sort())
console.log(carBrands.reverse());

//extract portions of an array slice(start, end (not included))
const friends = ['ola', 'Timi', 'John','Jane']
console.log(friends.slice(0,2))
console.log(friends.slice(1));

//split
//it divides an element of a string and returns it as an array
let text = "hello world is fun"
console.log(text.split(" "));
let text2 = "gwagwalada"
console.log(text2.split(""));
console.log(text2.split("a"));

//hello olleh
const reverseStr = (str)=> str.split("").reverse().join("");
console.log(reverseStr("hello"));

//higher order array methods (callback functions, iterator methods)
//for of method

const  fruits = ['oranges','Mangoes','peer','Grapes' ]

for(const fruit of fruits){
  console.log(`${fruit} is something i like`);
  if (fruit === "peer"){
    console.log(`${fruit} is my best`)
  }
}

//find, filter,forEach , map, reduce every some
//FOREACH - executes a function for each element in an array

const customer =['david','kola', 'ayo','femi','timi'];
customer.forEach((customer, index)=>{
 console.log(customer,index);
})

//map - creates  a new array with transformed element
const nums = [4,5,6,7]
const transformedNums = nums.map((num)=>{
  return num*2;

})
console.log(transformedNums);

//find -returns the first matching elemnens in an array

const mySpecialNum = nums.find((num)=>{
  return num>5
})
console.log(mySpecialNum);

//filter - returns all element taht fits a search condition in an array

const allMyspecialNums = nums.filter((num) => num >= 5)

console.log(allMyspecialNums)

let myBalance =8000
const transaction = [4000,-125,10000,-5000,-2000,1500]

transaction.map((transaction)=>{
  if (transaction > 0){
    console.log(`you have credited with ${transaction} naira`)
  } else{
    console.log(`you have debited ${transaction} naira`);
  }
})

transaction.map((transaction) =>{
  myBalance +=transaction
}) ;
console.log(myBalance);


const myCreditTransactions = transaction.filter((transaction) => transaction>0)
console.log(myCreditTransactions)

const myDebitTransactions = transaction.filter((transaction)=> transaction < 0)
console.log(myDebitTransactions);

const maxTransaction = 50000
//find if there is any transaction close to that maxTransaction
transaction.push(100000);

const specialTransaction =transaction.find((transaction) => transaction >= maxTransaction)
console.log(specialTransaction);

//every and some
// every = checks if all elements satisfy a condition

const ages = [20,42,61,81]
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);


//some = checks if atleast one satify the conition
const someChildren = ages.some((age) => age < 18 )
console.log(someChildren)

//reduce - is used for accumulating numbers

const cartPrices = [25000, 32000,15000,4000, -2500]
 const cartTotal = cartPrices.reduce((prev,curr) =>{
   return prev + curr;
 },300);
 console.log(cartTotal)

 //sort
 const peoplesName = ["zigi","samson","Niyi","Ademola"]
//  const atoZ = peoplesName.sort()
//  console.log(atoZ)

 const ztoA = peoplesName.sort((a,b) => b-a);
 console.log(ztoA);

 const prices = [8000,67000,767,5600]
// const highesttoLowest = prices.sort((a,b)=> b-a);
// console.log(highesttoLowest)

const lowesttoHighest = prices.sort((a, b) => a-b);
console.log(lowesttoHighest);