//number
const myAge = 87;

//number methods tofixed
const num = 9.5678
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(3));

//+ * - /
const x = 7
const y = 7;
console.log(x+y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//**  raised to the power(exponent)
console.log(3 ** 2)

//modulus % (return the remainder of division)
console.log( 3 % 2)
console.log(100 % 10);

//order of operation(bodmas)
//PEMDAS
4 + 2 * 3 ** 2;



let likes = 0;
//likes = likes + 1;
  //likes = likes + 1;             
//likes = likes + 1;
//likes = likes -1;

//likes++ increment by one
//like--  decrease by one


let savings = 5000;

savings= savings+ 3000;
//savings +=3000
savings = savings +10000
//7000
savings=savings - 7000;
//525
savings= savings - 525;

console.log(savings);



const fullName= "John Doe";
const accountNumber='02266266'
let myBalance= 4000;
//jan
// Credited 10000, debited 200 as sms charges, gift received of 3000, gifted someone 1200
myBalance += 10000;
myBalance -= 200;
myBalance +=3000;
myBalance -= 1200
console.log( 'My balance is', myBalance);
//peter pan with account number: accountNumber has a balance of mybalance

const accountStatement =` ${fullName} with account number: ${accountNumber} has a balance of ${myBalance.toFixed(2)}`;
console.log(accountStatement);