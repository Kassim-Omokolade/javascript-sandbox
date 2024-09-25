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
