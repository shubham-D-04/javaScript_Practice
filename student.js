/*--------------------------------------------------------------------------------------------
Write a program to create a student object where Name, Branch, Years.
---------------------------------------------------------------------------------------------*/

//Object Literials easy way to declare the Object.
//It is the process of declaring key-value pairs in curly brackets {} to declare an object.
let Student = {
  name: "Suryakumar Yadav",
  branch: "CSE",
  yearof: 4,
};

console.log("Student Details:", Object.values(Student));

//Using new Keyword

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
// Second Object
let person1 = new Person("Vivek", 30, "Mumbai");

console.log("Person Details:", Object.values(person1));
/*
Output:

Student Details: [ 'Suryakumar Yadav', 'CSE', 4 ]
Person Details: [ 'Vivek', 30, 'Mumbai' ]
*/
