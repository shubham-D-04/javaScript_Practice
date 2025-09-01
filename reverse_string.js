/*-------------------------------------------------------------------------
Write a program on reverse the string use given string value.
--------------------------------------------------------------------------*/

const str = "Marcus";
let reverseStr = "";

for (let i = str.length; i >= 0; i--) {
  reverseStr = reverseStr + str.substring(i, i + 1); // loop will add character in reverse order
}

console.log("Original String: " + str.toLowerCase());
console.log("Reverse String: " + reverseStr.toLowerCase());

/*
Output:

Original String: marcus
Reverse String: sucram
*/
