// //DOM  Document object model
// //how to select element on the
// //class id, tag,combination

// //get element by the ID
// const text = document.getElementById("text");
// console.log(text);

// // get element by classname
// const message = document.getElementsByClassName("message");
// console.log(message);

// //querySelector, querySelectorAll - use css selector.#, div .css
// const paragraph = document.querySelector("#text");
// console.log(paragraph);
// const paragraphs = document.querySelectorAll("#text");
// console.log(paragraphs);

// const heading6 = document.querySelector("div h6");

// //textContentl, innerText, innerHTML
// const heading = document.querySelector("h1");
// console.log(heading.textContent);
// heading.textContent += "JS IS FUN";

// console.log(heading.innerText);
// heading.innerText += "Js is good";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML = "<p>okay<p>";
// const name = "John";
// div.innerHTML = `<h1>Welcome ${name}<h1>`;

// //change attribute
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";

// //interact with css classnames
// const h1 = document.querySelector("h1");
// h1.className = "success";
// //classList .add or remove

// const msg = document.querySelector("p.message");
// //console.log(msg.classlist);
// msg.classList.add("error");
// msg.classList.remove("fuckudayo");
// console.log(msg)

// // create elements
// const section = document.createElement("section");
// section.innerHTML = "<h1>Created from Js<h1>";

// // append it
// const body = document.querySelector("body");
// body.appendChild(section);

// //remove element removeChild
// // body.removeChild(section);

// //replace child
// const link = document.createElement('a')
// link.innerText = 'visit Google'
// // link.href = "https://google.com"
// link.setAttribute("href","https://google.com")

// body.replaceChild(link,section);


// //responding to users interactions
// // event (click), event handler
// // addEventListener - handle
// const btn = document.querySelector("button")

// btn.addEventListener(click,() =>{
//   console.log("btn clicked");
// });

//form handling
const form = document.querySelector('form')
// submit
form.addEventListener("submit", (event) => {
  // default behaviour of a forn when submitted is to refresh the page
  event.preventDefault();
//select those inputfields
const username = document.querySelector(".username");
const password = document.querySelector(".password");

const usernameValue = username.value.trim();
const passwordValue = password.value;

console.log(usernameValue, passwordValue);
const small = document.querySelector("small");
// validate(
if (!usernameValue || !passwordValue){
    //DISPLAY ERROR MESSAGE
    
    small.textcontent = "please fill all fields";

}else if (usernameValue.length < 5){
    small.textContent = "minimum username length is 5";
}else if (passwordValue.toLowerCase().includes("password")){
    small.textContent = "Pasword must not incluse password";
} else{
    //submit form
    small.textContent = "Form Submitted"
}

});

