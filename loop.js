//loops for, while do-while
//FOR LOOP

//for (initiallizer; condition; increment){line of code}
//infinteloop
//  for (let i= 0; i <= 10; i++){
//     console.log("loop")
//  }

let sum =0;

 for (let i = 0; i <= 3; i++){
 sum += i;
 }
console.log(sum);

let y=0;
while (y <= 5){
    console.log("in the loop")
    y++;
}

let num = 0;
while (num <= 10) {
  console.log("current value of num" + num);


  num++;
}

let x = 5
do{
    console.log("I am in the loop")
    x++;
} while ( x <= 2);