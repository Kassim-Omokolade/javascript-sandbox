//DATA TYPES 1. PRIMITIVE 2. COMPLEX 
//PRIMITIVE DATA TYPES ARE DATA THTA HOLDS ONE VALUE AT A TIME While complex holds more than one 
//primitive Strings '' "", number, boolean true and false , null , undefined

//strings - text characters quotation mark '' ""
const firstName = "John"
const lastName = "Doe"

console.log(firstName);
console.log(lastName);

//string properties length, concatenation(joining)
//string.lenght

console.log(firstName.length);
console.log(lastName.length);

const fullName = firstName +" "+ lastName;
console.log(fullName);

console.log(fullName.length);

//strings method -functions that can be performed on strings 
//touppercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//replace, replaceAll
console.log(fullName.replace("o", "*"));
console.log(fullName.replace("John", "*"));

//includes
console.log(fullName.includes("y"));

//startsWith, endsWith
console.log(fullName.startsWith("j"));
console.log(fullName.endsWith("Doe"));

const myEmail = "omokoladekassim@gmail.com"
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

//indexOf, lastIndexOf 
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));
console.log(myEmail.charAt("0"));

//concat
console.log(myEmail.concat("example"));

//trimming
const userName = "   user001     ";
console.log( userName.length)
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

//extract portion of a string
//slice, substring , substr( start, num of character we want)

const surname = "sandler";
console.log(surname.slice(0, 4))
console.log(surname.substring(1, 4));
console.log(surname.substr(0, 5));

//template literals - allows us to format variables into strings
const author = "Ngozi Adichie";
const bookTitle = "Americanah";
const yearpublished = "2016.";
//

//nbackticks `the Book ${bookTitle} `
const description = ` The book ${bookTitle} written by ${author} was publish in year ${yearpublished}`;
console.log(description);

const name1 = "ade";
const name2 = "Wale";
//Ade is a boy
const sentence= `${name1} is a boy`;
//His name is wale
const sentence2 = `His name is ${name2}`;

//Tinubu said and i quote 'let the poor breath'
const quote = `Tinubu said and I quote "Let the poor breathe"`;
console.log(quote);
