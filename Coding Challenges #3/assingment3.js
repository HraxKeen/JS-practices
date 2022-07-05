const firstDolphinScore = Number(prompt("Dolphins first round score"));
const secondDolphinScore = Number(prompt("Dolphins second round score"));
const thirdDolphinScore = Number(prompt("Dolphins third round score"));

const firstKoalasScore = Number(prompt("Koalas first round score"));
const secondKoalasScore = Number(prompt("Koalas second round score"));
const thirdKoalasScore = Number(prompt("Koalas third round score"));

let averageDolphinScore =
  (firstDolphinScore + secondDolphinScore + thirdDolphinScore) / 3;
let averageKoalasScore =
  (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;

console.log(averageDolphinScore);
console.log(averageKoalasScore);

if (averageDolphinScore > averageKoalasScore && averageDolphinScore >= 100) {
  console.log("Dolphins wins!");
} else if (
  averageDolphinScore < averageKoalasScore &&
  averageKoalasScore >= 100
) {
  console.log("Koalas wins!");
} else if (
  averageDolphinScore === averageKoalasScore &&
  averageDolphinScore >= 100 &&
  averageKoalasScore >= 100
) {
  console.log("DRAW!");
} else {
  console.log("Both teams lose");
}
