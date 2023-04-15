function soln() {
  var a = (b = 3);
  console.log(typeof a);
  console.log(a);
}

soln();

//coding challenge
/*
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.76;

marksWeight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

function calculateBMI(weight, height) {
  const BMI = weight / (height * 2);
  return BMI;
}
const marksBMI = calculateBMI(marksWeight, marksHeight);
console.log(marksBMI);
const johnsBMI = calculateBMI(johnWeight, johnHeight);
console.log(johnsBMI);

if (marksBMI < johnsBMI) {
  console.log("John has higher BMI than Mark");
} else if (marksBMI > johnsBMI) {
  console.log("Mark has higher BMI than John");
} else if (marksBMI === johnsBMI) {
  console.log("BMI is same for both");
}

//terinary operator

console.log(
  marksBMI < johnsBMI
    ? `John has higher BMI of ${johnsBMI} than Mark's BMI ${marksBMI}`
    : marksBMI > johnsBMI
    ? `Mark has higher BMI of ${marksBMI} than John's BMI ${johnsBMI}`
    : "BMI is same for both"
);

function calculateAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

const firstMatchDolphinAverage = calculateAverage(
  (teamDolphinScore1 = 96),
  (teamDolphinScore2 = 108),
  (teamDolphinScore3 = 89)
);
console.log(firstMatchDolphinAverage);
const firstMatchKolaAverage = calculateAverage(
  (teamKolaScore1 = 88),
  (teamKolaScore2 = 91),
  (teamKolaScore3 = 110)
);
console.log(firstMatchKolaAverage);
const secondMatchDolphinAverage = calculateAverage(
  (teamDolphinScore1 = 97),
  (teamDolphinScore2 = 112),
  (teamDolphinScore3 = 101)
);
console.log(secondMatchDolphinAverage);
const secondMatchKolaAverage = calculateAverage(
  (teamKolaScore1 = 109),
  (teamKolaScore2 = 95),
  (teamKolaScore3 = 123)
);
console.log(secondMatchKolaAverage);
const thirdMatchDolphinAverage = calculateAverage(
  (teamDolphinScore1 = 97),
  (teamDolphinScore2 = 112),
  (teamDolphinScore3 = 101)
);
console.log(thirdMatchDolphinAverage);
const thirdMatchKolaAverage = calculateAverage(
  (teamKolaScore1 = 109),
  (teamKolaScore2 = 95),
  (teamKolaScore3 = 106)
);
console.log(thirdMatchKolaAverage);

const firstMatchWinner =
  firstMatchDolphinAverage > firstMatchKolaAverage &&
  firstMatchDolphinAverage >= 100
    ? `As Team Dolphin has an average of ${firstMatchDolphinAverage} which is higher than the average of Kola which has the score about ${firstMatchKolaAverage} So the Team *Dolphin* wins`
    : firstMatchKolaAverage > firstMatchDolphinAverage &&
      firstMatchKolaAverage >= 100
    ? `As Team Kola has an average of ${firstMatchKolaAverage} which is higher than the average of Dolphin which has the score about ${firstMatchDolphinAverage} So the Team *Kola* wins`
    : firstMatchKolaAverage === firstMatchDolphinAverage &&
      firstMatchKolaAverage >= 100 &&
      firstMatchKolaAverage >= 100
    ? ` Both of them score the same so the Match is Draw`
    : "The score is less than 100 for both the team ";
console.log(firstMatchWinner);

const secondMatchWinner =
  secondMatchDolphinAverage > secondMatchKolaAverage &&
  secondMatchDolphinAverage >= 100
    ? `As Team Dolphin has an average of ${secondMatchDolphinAverage} which is higher than the average of Kola which has the score about ${secondMatchKolaAverage} So the Team *Dolphin* wins`
    : secondMatchKolaAverage > secondMatchDolphinAverage &&
      secondMatchKolaAverage >= 100
    ? `As Team Kola has an average of ${secondMatchKolaAverage} which is higher than the average of Dolphin which has the score about ${secondMatchDolphinAverage} So the Team *Kola* wins`
    : secondMatchDolphinAverage === secondMatchKolaAverage &&
      secondMatchDolphinAverage >= 100 &&
      secondMatchKolaAverage >= 100
    ? ` Both of them score the same so the Match is Draw`
    : "The score is less than 100 for both the team ";
console.log(secondMatchWinner);

const thirdMatchWinner =
  thirdMatchDolphinAverage > thirdMatchKolaAverage &&
  thirdMatchDolphinAverage >= 100
    ? `As Team Dolphin has an average of ${thirdMatchDolphinAverage} which is higher than the average of Kola which has the score about ${thirdMatchKolaAverage} So the Team *Dolphin* wins`
    : thirdMatchKolaAverage > thirdMatchDolphinAverage &&
      thirdMatchKolaAverage >= 100
    ? `As Team Kola has an average of ${thirdMatchKolaAverage} which is higher than the average of Dolphin which has the score about ${thirdMatchDolphinAverage} So the Team *Kola* wins`
    : thirdMatchDolphinAverage === thirdMatchKolaAverage &&
      thirdMatchDolphinAverage >= 100 &&
      thirdMatchKolaAverage >= 100
    ? `Dolphin's score is ${thirdMatchDolphinAverage} & team Kola's score ${thirdMatchKolaAverage} as here Both of them score the same so the Match is Draw`
    : "The score is less than 100 for both the team ";
console.log(thirdMatchWinner);

// Switch Statement

const WINNNER = "thirdMatchWiner";
let dolphinAverage1 = 97.66;
let kolaAverage1 = 96.33;
let dolphinAverage2 = 103.33;
let kolaAverage2 = 109;
let dolphinAverage3 = 103;
let kolaAverage3 = 103;
switch (WINNNER) {
  case "firstMatchWinner":
    dolphinAverage1 > kolaAverage1
      ? console.log("team dolphin wins")
      : "team kola wins";

    break;
  case "secondMatchWinner":
    dolphinAverage2 > kolaAverage2
      ? console.log("team dolphin wins")
      : kolaAverage2 > dolphinAverage2
      ? console.log("team kola wins")
      : "";
    break;
  case "thirdMatchWiner":
    dolphinAverage3 > kolaAverage3
      ? console.log("team dolphin wins")
      : kolaAverage3 > dolphinAverage3
      ? console.log("team kola wins")
      : dolphinAverage3 === kolaAverage3
      ? console.log("both has the same score")
      : "";
    break;
  default:
    console.log("Some data is missing");
}

// it can also be writtenn as
// const WINNER = "thirdMatchWinner";
// const dolphinAverage1 = 97.66;
// const kolaAverage1 = 96.33;
// const dolphinAverage2 = 103.33;
// const kolaAverage2 = 109;
// const dolphinAverage3 = 103;
// const kolaAverage3 = 103;

function findWinner(dolphinAverage, kolaAverage) {
  if (dolphinAverage > kolaAverage) {
    console.log("team dolphin wins");
  } else if (kolaAverage > dolphinAverage) {
    console.log("team kola wins");
  } else {
    console.log("both have the same score");
  }
}

if (WINNER === "firstMatchWinner") {
  findWinner(dolphinAverage1, kolaAverage1);
} else if (WINNER === "secondMatchWinner") {
  findWinner(dolphinAverage2, kolaAverage2);
} else if (WINNER === "thirdMatchWinner") {
  findWinner(dolphinAverage3, kolaAverage3);
} else {
  console.log("Some data is missing");
}
