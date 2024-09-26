const marksmass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnsHeight = 1.95

const markBmi = marksmass / markHeight ** 2;
const johnBmi = johnMass / johnsHeight ** 2;
const markHigherBMI = markBmi > johnBmi;
console.log(markBmi , johnBmi);

console.log(markHigherBMI);

// if (markHigherBMI){
//     console.log("Mark's BMI is higher than John's")
// } else{
//     console.log("John's BMI is higher than Mark's");
// }

if (markBmi > johnBmi){
    console.log("Mark's BMI is higher than John's");
} else if( johnBmi > markBmi){
    console.log("John's BMI is higher than Mark's");
}else{
    console.log(" mark's bmi and john's bmi are equal");
}


//functions
//functions are use to run snippets of code

let dolphinsScore = 96 + 108 + 89;
let pandasScore = 88 + 91 + 110;

let averageScore = dolphinsScore / 3;
console.log(`average dolphin score is ${averageScore}`);

let averageScorePanda = pandasScore / 3;
console.log(`average pandas score is  ${averageScorePanda}`);

if (averageScore > averageScorePanda) {
  console.log("Dolphins win");
} else if (averageScore < averageScorePanda) {
  console.log("Panda wins");
} else {
  console.log("draw");
}

if (averageScore > averageScorePanda && averageScore >= 100) {
  console.log("Dolphin wins");
} else if (averageScorePanda > averageScore && averageScore >= 100) {
  console.log("Panda wins");
} else if (
  averageScorePanda === averageScore &&
  averageScore >= 100 &&
  averageScorePanda >= 100
) {
  console.log("draw");
} else {
  console.log("no winner");
}
