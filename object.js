//OBJECT
// const person = ["ade","wale",67,"google",true]
//{key : value,key2: value2}
//key and value pairs are called object properties

const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: 64,
  isMarried: true,
  friends: ["john", "jande"],
  workHours: {
    monday: "8 hours",
  },
};
console.log(person);

//access properties inside of object
//dot notation(objName.propertyName)
console.log(person.age);
console.log(person.friends);
console.log(person.friends[0]);
console.log(person.workHours.monday);

//bracket notation
console.log(person["age"]);
console.log(person["friends"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

//adding a new property to an object
person.car = "Benz";
person.hobbies = ["running", "sleeping"];
console.log(person);

//removing a property from an object declare
delete person.isMarried;
console.log(person);

//object method - functions that the developer writes to work on the object

const book = {
  title: "In the shadow",
  author: "John Doe",
  yearPublished: "2000",
  genre: "fiction",
  isBestSeller: false,
  rating: 3.5,
  summary: function () {
    //The book is titled in the shadow and
    //it is written by John Doe and has a rating of 3.5
    console.log(
      `the book is titled ${this.title} and it is written by ${this.author} and has a rating of ${this.rating}`
    );
  },
};

book.summary();
book.title;
//this keyword - inside of a function declaratiobn in an object
// it refers to the object

//object destructing -
//modern and faster way of picking properties in an object
// const user = {
//   userName: "user001",
//   fullName: "peter pan",
//   password: "*******",
//   profilePic: "avatar",
//   followers: ["wale", "john", "jane"],
//   following: ["Elon musk", "T pain", "Ronaldo"],
//   dateOfAccount: 2020,
//   post: {
//     title: "JS is fun",
//     desc: "i love JS a lot",
//   },
// };

// user.profilePic;
// const { userName, profilePic, dateOfAccount, password } = user;
// const {
//   post: { title, desc },
// } = user;


// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
  dateOfAccount: 2020,
  posts: {
    title: "JS is Fun",
    desc: "I love JS a lot",
  },
};

user.profilePic;
user.posts.title;
user.fullName;

const { username, profilePic, dateOfAccount, password, followers } = user;
const {
  posts: { title, desc },
} = user;
console.log(title, desc);

const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;

//array destrcuturing
const peoplesNames = ["susan","joy","Mercy","ade"]
const [one, ,two]=peoplesNames
console.log(two,one)