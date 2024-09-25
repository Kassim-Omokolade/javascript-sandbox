let userChoice = "rock";
let computerChoice = "scissors";
console.log(userChoice , computerChoice);

if ( userChoice === computerChoice){
    console.log("This is a tie");
}else if( userChoice === "rock"){
    if(computerChoice === "scissors"){
    console.log("user wins, Rock smashes");
} else {
    console.log("computer wins,paper cover rock")
}
}  else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("User wins, paper covers rock");
  } else {
    console.log("computer wins, scissors cuts paper");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    console.log("Computer wins, rock smashes scissors");
  } else {
    console.log("User wins, scissors ccuts paper");
  }
} else {
  console.log("Invalid entry, try again");
}