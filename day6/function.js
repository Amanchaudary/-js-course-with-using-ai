//  Function (Declaration ,Expression ,Arrow function)
// tutorial
// JavaScript Functions | Sigma Web Development Course - Tutorial #58

// function type 3 type simple functon ,noname function and arrow function

// 1 simple function
function aman() {
  console.log("this is simple function");
  console.log("this is a ai course");
}
aman();
// function with arguments
function sum(num, num2) {
  console.log(num + num2);
}
sum(2, 3);
//  function with return key
function sum2(num1, num2) {
  return num1 + num2;
}
let add = sum2(20, 30);

console.log(add);

// 2 no-name function or anonymous function or first class function
// tutorial
// FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions | Namaste JavaScript Ep. 13
//  function chai vaule ko form ma use garna pard use garinxa so varirable ma assinate garinga
let nonamefunction=function (){
    console.log("this is no-name function");
}
nonamefunction()


// Arrow function
//  asma function key use garidain ra aslai pani variable banai assinnamte garixa
let arrow=()=>{
    console.log("this is arrow function");
}
arrow()
