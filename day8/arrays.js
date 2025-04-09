// Arrays and its methods (map filter and reduce)
// tutorial
// Array in Javascript | chai aur #javascript

// method1
//  yo chai tholo bracket ma lekinxa asma value haru add dilete garna sakinxa
console.log("Array creating by method 1");
const myArray=[0,1,2,3,4,5,]
console.log(myArray);
// array ko vitra ko value print garne taarika
// []bracket vitra index number lekinxa
console.log(myArray[4]);

// methode 2
// asma new Array() key ko use garinxa

console.log("creating array be method2");
const myArray2=new Array(1,2,3,4);
console.log(myArray[3]);

console.log("some methods of array");
// 3 some methode of array
// 1 push method--> asle value push gardinxa
myArray2.push(6)
console.log(myArray2);
// 2 pop method --> asko matlab array ko lat value lai remove gardinxa ra asma index numbr puss garidain
myArray2.pop()
console.log(myArray2);
// 3 slice method and splice methode --> splice le array lai nai change gardinxa
//  slice le 1,3 ma 3 samma ko valuse jadain
const arrslice=myArray2.slice(1,3) 
console.log(arrslice);