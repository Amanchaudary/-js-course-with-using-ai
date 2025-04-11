// object and methods in javaScript
// tutorial
// Objects in depth in javascript in hindi | chai aur #javascript

console.log("object and methods");
// two type of way makeing methods

// 1 method ==> literals jasto asma singleton object bandai
console.log("object literals method1");
//  asma {} symble use garixa ra key value ma kam garxa ra asma : ra , key xutauna hudain
// key chai jaele ni string ma hunxa value chai j pani huna sakxa 
// object vitra array, function ra object vitra object ni dina sakinxa
const userobj={
    name: "aman",
    cast: "chaudhary",
    age: "24",
    email:"amancdy.google.com",
    lastday:["monday","tuesday"]
}
console.log(userobj);
// calling the method
//  . key use garer wa anotherway mani excess garna sakinxa
console.log("calling the object of literals method");
// bad way to excess
console.log(userobj.email);
// second way is best for calling ani so use second way ani email ma "" deko xa kinaki yo key ho yo strng ma hunxa so
console.log(userobj["email"]);
console.log(userobj["lastday"]);


// 2method==> constructor ko jasto yo jaele ni singleton hunxa 
// singleton vaneko autai tarako object ho
// tutorail
// Objects in Javascript part 2 in Hindi | chai aur #javascript  ==> methods2.js file ma xa
