// json and localStorage in javascript
// tutorail
// JavaScript Tutorial: Working with JSON in JavaScript | Web Development Tutorials #62
// json==> javascript object notation

console.log("learn about json");
// yo chai {}vitra hunxa ra key value ma use hunxa ra yo auta object nai ho asma double courte matra use garna milxa
let myJson={
    "name":"Aman",
    "cast":"chaudhary",
    "lastName":"aman",
    "age":24
}
console.log(myJson);
// convert in String==> asko lagi JSON.stringify(name) key use garinxa
let myjsonString=JSON.stringify(myJson)
console.log(myjsonString);
console.log(typeof myjsonString);

// replace garne tarika ==> .replace() use garinxa
let replace=myjsonString.replace('Aman','kanxa')
console.log(replace);