//
//rest and spread
//optional chaining 
const user = {
  name: "John Doe",
  age: 45,
gender: "Male",
previousJobs:{
   one: "Jumia",
   two: "Paystack",
   three: "Meta",
},
};

console.log(user.name);
console.log(user?.car)
console.log(user?.previousJobs?.three);

// nullish coalescence
//leftEXpression ?? defaultValue
const username = null 

console.log(username ?? "UNknown User");
// if (user,profilePic);
  //display picture
 // <img src ={}

 //img src= {user?.profilePic}

 //rest operator
 const countries =["Cuba","Algeria","Mexico","USA"];
 const [one,...others] = countries;

 console.log(one);
 console.log(others);

 const country = {
   name: "Nigeria",
   yearOfIndependence: 1960,
   officialLanguage: "English",
   isIsland: false,
 };
 const { name, ...remaining } = country;
 console.log(remaining);

 //spread operation ...
 const africanCountries = ["mali", "Togo","Kenya","Uganda"]
 const asianCountries=["china","Japan","Bangladesh","vietniem"]

 const allCountries = [...africanCountries,...asianCountries,"Austria","France"]
 console.log(allCountries)