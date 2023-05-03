// function string(str) {
//   const word = str.split(" ");
//   let result = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length < 5) {
//       result.push(word[i]);
//     } else {
//       let newStr = word[i].split("");
//       let reverse = newStr.reverse();
//       let join = reverse.join("");
//       result.push(join);
//     }
//   }
//   return result.join(" ");
// }
// console.log(string("hello world is happy"));

// word[i].length >= 5) {
//       let newStr = word[i].split("");
//       let reverse = newStr.reverse();
//       let join = reverse.join("");
//       console.log(join);
// const word = [];
// word.push(str.split(" "));

// function reverseString(str) {
//   var splittingStr = str.split("");
//   var reversing = splittingStr.reverse();
//   let joining = reversing.join("");
//   return joining;
// }

// console.log(reverseString("hello"));

function spinWords(string) {
  const word = string.split(" ");
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length < 5) {
      result.push(word[i]);
    } else {
      let newStr = word[i].split("");
      let reverse = newStr.reverse();
      let join = reverse.join("");
      result.push(join);
    }
  }
  return result.join(" ");
}
console.log(spinWords("Hey fellow warriors"));

let alphabet1 = "t";
let alphabet2 = "T";
if (alphabet1 == alphabet2) {
  console.log("both are same");
} else {
  console.log("both are not same");
}

const array = ["a", "b", "c", "d", "e"];
let value = [];
let numbering = 1;
for (let i = 0; i < array.length; i++) {
  let result = value.push(numbering++);
  console.log(result);
}

let obj = {
  name: "akash",
  age: "23",
};
obj.adress = "14 / 138 pillayar kovil street ";
console.log(obj);

// assigning key pair value

// const alphabets = [];

// for (let i = 97; i <= 122; i++) {
//   alphabets.push(String.fromCharCode(i));
// }
// const emptyObj = {};
// const values = [];
// let nnumbering = 1;
// for (let i = 0; i < alphabets.length; i++) {
//   let str = "akash";
//   // console.log(alphabets[i]);
//   let result = values.push(nnumbering++);
//   emptyObj[alphabets[i]] = values[i];
//   for (let j = 0; j < str.length; j++) {
//     console.log("it has the j value");
//   }
// }

// console.log(emptyObj);
// console.log(alphabets); // ['a', 'b', 'c', ..., 'x', 'y', 'z']

const alphabets = [];

for (let i = 97; i <= 122; i++) {
  alphabets.push(String.fromCharCode(i));
}
const emptyObj = {};
const values = [];
// let nnumbering = 1;
for (let i = 0; i < alphabets.length; i++) {
  // let result = values.push(nnumbering++);
  emptyObj[alphabets[i]] = i;
  console.log(emptyObj);
  // for (let j = 1; j < 5; j++) {
  //   console.log(`repetation -----${j}`);
  // }
}
