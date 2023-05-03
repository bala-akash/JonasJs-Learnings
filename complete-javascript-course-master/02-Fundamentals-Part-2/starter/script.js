//coding challenge2
/**
function calculateTip(amount) {
  const billAmount = amount;
  const tips =
    billAmount >= 50 && billAmount <= 300
      ? billAmount * 0.15
      : billAmount * 0.2;
  console.log(
    `The Bill-Amount is : ${billAmount} and the Tips will be ${tips} so, the total amount to be paid will be ${
      billAmount + tips
    }`
  );
}


calculateTip(275);
calculateTip(40);
calculateTip(430);
*/

// it can also be written as

// function calculateTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [430, 275, 40];
// const tips = [
//   calculateTip(bills[0]),
//   calculateTip(bills[1]),
//   calculateTip(bills[2]),
// ];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

const calcAverage = (a, b, c) => (a + b + c) / 3;
let dolphinScore = calcAverage(44, 23, 71); // no one wins
let kolaScore = calcAverage(65, 54, 49);
/** 
dolphinScore = calcAverage(85, 54, 41);
kolaScore = calcAverage(23, 34, 27);team dolphins wind the trpohy
*/
console.log(dolphinScore);
console.log(kolaScore);
function checkWinner(dolphinavgscore, kolaavgscore) {
  dolphinavgscore >= 2 * kolaavgscore
    ? console.log("Team Dolphin win trophy")
    : kolaavgscore >= 2 * dolphinavgscore
    ? console.log("team kola win trophy")
    : console.log("no one wins");
}
checkWinner(dolphinScore, kolaScore);

// coding challenge3

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * 2);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(john.bmi);
console.log(mark.bmi);

mark.bmi > john.bmi
  ? console.log(
      `${mark.fullname}'s BMI ${mark.bmi} is higher than ${john.fullname}'s BMI ${john.bmi}`
    )
  : john.bmi > mark.bmi
  ? console.log(
      `${john.fullname}'s BMI ${john.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`
    )
  : "";

//Looping
/**
 let array = [];
let akashArray = ["Akash", 2022 - 1999, 8524837815, "coder"];
for (let i = 0; i < akashArray.length; i++) {
  console.log(akashArray[i], typeof akashArray[i]);

  // array[i] = typeof akashArray[i];
  array.push(typeof akashArray[i]);
}

console.log(array);
 */
// akashArray = ["Akash", 2022 - 1999, 8524837815, "coder"];
// for (let i = 0; i < akashArray.length; i++) {
//   console.log(
//     `The current loop number is ${i} and has the value of ${
//       akashArray[i]
//     } and its type is ${typeof akashArray[i]}`
//   );
// }

// const years = [1999, 1998, 1997, 1996];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2023 - years[i]);
// }
// console.log(age);

// let array = [];
// let akashArray = ["Akash", 2022 - 1999, 8524837815, "coder"];
// for (let i = 0; i < akashArray.length; i++) {
//   // if (typeof akashArray[i] !== "string") continue;
//   if (typeof akashArray[i] == "number") break;
//   console.log(akashArray[i], typeof akashArray[i]);

//   // array[i] = typeof akashArray[i];
//   array.push(typeof akashArray[i]);
// }

// console.log(array);

let akashArray = ["Akash", 2022 - 1999, 8524837815, "coder"];

for (let i = akashArray.length - 1; i >= 0; i--) {
  console.log(akashArray[i], typeof akashArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---Exercise no.${exercise}`);
  for (let repetition = 1; repetition <= 5; repetition++) {
    console.log(`---Exercise : ${exercise} and repetition ${repetition}`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`repetation ${rep} `);
  rep++;
}

// an example with a dice

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(` The drawn dice is : ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`You drawn ${dice} `);
  }
}

function calculateTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [24, 41, 586, 784, 25, 48, 58, 784, 123, 451, 98];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

let arr = [2, 4];
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}
console.log(calculateAverage(arr));

const temperature1 = [55, 4, "error", 2, 23];
const temp2 = [4, 57, 8, "error", -1];
const temp3 = temperature1.concat(temp2);
console.log(temp3);
const calcTempAltitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
  console.log(max, min);
  return max - min;
};

// const amplitude = calcTempAltitude(temp3);
// console.log(amplitude);
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     value: +prompt("Enter the degree:"),
//   };
//   const kelvin = measurement.value + 10;
//   return kelvin;
// };

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(`...${data[0]}...${data[1]}...${data[2]}...`);
  }
}
printForecast(data1);
