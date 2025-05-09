// Recursion in javascript
// tutorail
// Javascript Recursion | Lecture 18 | Learn Coding
//  testo function ho jun function le aafulai nai call garxa testo function ho

// example aafno vitra aafailai call gareko xa
// function name(){
//     name()
// }
// name()

// function recursive(){
//     console.log("this is a recursive function");
//     recursive()
// }
// recursive()

// base condition
/* funciton>function>function>
function>function>function>
base condtion
 */

function coding(num){
    if(num==0){
        console.log("coding has be done");
        return
    }else{
        console.log("i am doing codeing");
        coding(num-1)
    }
}
coding(5)

// problam 1
// find the factorial of 5!=>5*4*3*2*1
// n!=n*n-1*n-2......

function factorial(n){
    if(n===1){
        return 1
    }else{
          let fact=(n*factorial(n-1))
        return fact
    }
}
console.log(factorial(5));
