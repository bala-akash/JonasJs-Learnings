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
