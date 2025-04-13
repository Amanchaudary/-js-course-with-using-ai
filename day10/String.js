//  this is day 10 String and its method
// tutorail
// Strings in Javascript | chai aur #javascript

// method 1 to make string
console.log("string method be start");
const name="aman"
const repoCount=50
console.log(name+repoCount+"value");
// String concatination
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// method2 to make STring ==> asma new  String key use garinxa
const gameName=new String("hitesh")
console.log(gameName[0]);

// some method of String

// .lenght property ==> yo chai function navayakole length paxi () nadeko
console.log(gameName.length);
// to uppercase function ==> yo chai function ho so asko paxi ()deko
console.log("some methods");
console.log(gameName.toUpperCase());
// charcter postion chake method & charAt()method ==> asme index value deinxa
console.log(gameName.charAt(2));
// slice method ==> asma nagative value din sakinxa
const result=gameName.slice(-6,2)
console.log(result);

//  replace method ==> yo value replace garna use garixa dherai use garinxa

const url="https://aman.com/aman%20chaudhary"
console.log(url);
// .replace() asko first componet chai replace garna parne value ra lst chai garnakhojeko value hunxa
console.log(url.replace('%20',"15"));

//  note sakesamma string ko method use garne ra concate garna literals use garne
