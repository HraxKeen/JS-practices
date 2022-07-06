/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
let first = "Matilda";
let firstNamePerson = "Jonas";
let first_name_person = "Mico";

console.log(firstName);
console.log(first);
console.log(firstNamePerson);
console.log(first_name_person);

//let 3years = 3;               --WRONG WAY !!
//let jonas&matilda = 'JM';     --WRONG WAY !!

//let function = 27:            --WRONG WAY !!
let _function = 27; //THIS IS OKAY !!

//let new = 23;                 --WRONG WAY !!
let _new = 23; //THIS IS OKAY !!

console.log(_function);
console.log(_new);


const firstName = "teemu";
const job = "programmer";
const birthYear = 1988;
const year = 2022;

const teemu =
  "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(teemu);

const teemuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(teemuNew);

console.log(`Just regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗"); //windows + . (emojies)
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years =)`);
}

const birthYear = 1988;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


//conversion
const inputYear = "1991";

console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number("Teemu"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("i am " + 23 + " years old");
console.log("i am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; //11 !!
n = n - 1; // 11 - 1 !!
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false

console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true

console.log(Boolean("")); //false

const money = 1;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;

if (height) {
  console.log("height is defined");
} else {
  console.log("height is UNDEFINED");
}


const age = 18; // '18'

if (age === 18) console.log("You just became and adult (strict)");

if (age == 18) console.log("You just became and adult (loose)");


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing number");
} else if (favourite === 7) {
  console.log("7 is cool number also");
} else {
  console.log("number is ", favourite);
}

if (favourite !== 23) console.log("Why not 23");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;
/*
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


const day = prompt("What day is it");

switch (day) {
  case "monday":
    console.log("Plan learning structure");
    console.log("Open PC");
    break;
  case "tuesday":
    console.log("Prepare learning videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code exmples");
    break;
  case "friday":
    console.log("Start weekend");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend (❁´◡`❁)");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan learning structure");
  console.log("Open PC");
} else if (day === "tuesday") {
  console.log("Prepare learning videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code exmples");
} else if (day === "friday") {
  console.log("Start weekend");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend (❁´◡`❁)");
} else {
  console.log("Not a valid day");
}


const age = Number(prompt("Age ?"));

age >= 18
  ? console.log("i like to drink wine 😊") // if part
  : console.log("i like to drink water 😅"); // else part

const age = Number(prompt("Age ?"));

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
