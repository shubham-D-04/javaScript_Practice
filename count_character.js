/*------------------------------------------------------------------------------------------------
Count Occurrences of Characters
Write a program to count how many times each character appears in a string.
--------------------------------------------------------------------------------------------------*/

const str = "MichaelMccool";
let empty_str = {}; // Empty object to store the value.

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase(); // store the character in lowerCase.

  if (empty_str[char]) {
    empty_str[char]++;
  } else {
    empty_str[char] = 1;
  }
}
for (let char in empty_str) {
  console.log("character: " + char + " Apperence: " + empty_str[char]); // print the output
}

/*
Output:

character: m Apperence: 2
character: i Apperence: 1
character: c Apperence: 3
character: h Apperence: 1
character: a Apperence: 1
character: e Apperence: 1
character: l Apperence: 2
character: o Apperence: 2
*/
