const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiJohn > bmiMark;

console.log("Mark BMI", bmiMark);
console.log("John BMI", bmiJohn);

console.log("Mark has the highest BMI?", markHigherBMI);
