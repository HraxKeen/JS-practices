"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

//const interface = "Audio";
//const private = 534;


//-----------------------------------------------------------
function logger() {
  console.log("My name is Teemu");
}

// calling, running or invoking
logger();
logger();
//-----------------------------------------------------------
function fruitProcessor(apples, orange) {
  console.log(apples, orange);
  const juice = `Juice with ${apples} apples and ${orange} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
//-----------------------------------------------------------
const country = prompt("Add country");
const poulation = Number(prompt("Add Population"));
const capitalCity = prompt("Add Capital City");

const calculatePercentage = (poulation / 7900) * 100;

function describeCountry(country, poulation, capitalCity) {
  //console.log(country, poulation, capitalCity);
  const countryText = `${country} has ${poulation} million people and its capital city is ${capitalCity}`;
  console.log(countryText);
}
describeCountry(country, poulation, capitalCity);

function percentageOfWorld1() {
  const calculateCountry = `${country} has ${calculatePercentage} population percentage of world`;
  return calculateCountry;
}

const percentageOfWorld = percentageOfWorld1(country, calculatePercentage);
console.log(percentageOfWorld);
//-----------------------------------------------------------
function calcAge1(birthYear) {
  return 1988 - birthYear;
}

const age1 = calcAge1(2037);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

//-----------------------------------------------------------
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percFinland = percentageOfWorld3(6);
console.log(percFinland);

//-----------------------------------------------------------
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Teemu"));
console.log(yearsUntilRetirement(1980, "Bob"));
//-----------------------------------------------------------


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
//-----------------------------------------------------------

const country = prompt("Add country");
const poulation = Number(prompt("Add Population"));
const capitalCity = prompt("Add Capital City");

const calculatePercentage = (poulation / 7900) * 100;

function describeCountry(country, poulation, capitalCity) {
  //console.log(country, poulation, capitalCity);
  const countryText = `${country} has ${poulation} million people and its capital city is ${capitalCity}`;
  console.log(countryText);
}
describeCountry(country, poulation, capitalCity);
//--------------------//
function percentageOfWorld1() {
  const calculateCountry = `${country} has ${calculatePercentage} population percentage of world`;
  return calculateCountry;
}
const percentageOfWorld = percentageOfWorld1(country, calculatePercentage);
console.log(percentageOfWorld);
//--------------------//
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percFinland = percentageOfWorld3(6);
console.log(percFinland);
//--------------------//
function describePopulation(country, poulation) {
  const percentage = percentageOfWorld3(poulation);
  const description = `${country} has ${poulation} which is about ${percentage} of the world`;
  console.log(description);
}
describePopulation(country, poulation);
//-----------------------------------------------------------

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }

  //return ;
};

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));

//-----------------------------------------------------------

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);


const populations = new Array(1441, 126, 55, 83);
console.log(populations.length === 4);

const country = ["China", "Japan", "Finland", "Germany"];

const calcPercentages = (population) => (population / 7900) * 100;

const percentages = [
  calcPercentages(populations[0]),
  calcPercentages(populations[1]),
  calcPercentages(populations[2]),
  calcPercentages(populations[3]),
];
console.log(country);
console.log(percentages);
*/
//-----------------------------------------------------------
