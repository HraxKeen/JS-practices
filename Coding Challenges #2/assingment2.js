const massMark = 85;
const heightMark = 1.76;
const massJohn = 75;
const heightJohn = 1.88;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

//const markHigherBMI = bmiJohn > bmiMark;

if (bmiMark > bmiJohn) {
  console.log(`Mark's ${bmiMark} is higher than John's! ${bmiJohn}`);
} else {
  console.log(`John's ${bmiJohn} is higher than Mark's! ${bmiMark}`);
}

/*
console.log("Mark BMI", bmiMark);
console.log("John BMI", bmiJohn);

console.log("Mark has the highest BMI?", markHigherBMI);
*/
