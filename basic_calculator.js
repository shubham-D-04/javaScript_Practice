/*--------------------------------------------------------------------------------
Write a program to build a simple calculator using prompt and alert.
---------------------------------------------------------------------------------*/

let num1 = prompt("Enter First Number: ");
let num2 = prompt("Enter Second Number: ");
let num3 = prompt("Select Operation Below:\n 1.Add 2.Sub 3.Multiple 4.Divide");
if (num1 == "" || num2 == "") {
  alert(`Invalid Number or Null`);
} else if (num3 == 1) {
  let sum = Number(num1) + Number(num2);
  alert(`Addition: ${sum}`);
} else if (num3 == 2) {
  let sum = Number(num1) - Number(num2);
  alert(`Subtraction: ${sum}`);
} else if (num3 == 3) {
  let sum = Number(num1) * Number(num2);
  alert(`Multiple: ${sum}`);
} else if (num3 == 4) {
  let sum = Number(num1) / Number(num2);
  alert(`Division: ${sum}`);
}
