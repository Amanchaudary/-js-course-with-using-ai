// callback function in js
// Higher Order Functions and Callbacks in JavaScript | The Complete JavaScript Course | Ep.35
// callback function vaneko auta function vitra arko function chai pareeter ko rupama pass garune kura ho

// higher order function

// b chai paremeter ho mouse le hover garda show garxa if gardian gane tyo argument ho
function a(b){
    console.log(typeof b);
    console.log(b);
    b()
}
// // string pass garda
// a('hiii')
// // object pass garda
// a({username:'aman',userAge:50})
// // array pass garda
// a([1,2,3,4])

function sayHi(){
    console.log("hiiiiiiiiii");
}
// a function vitra sayHi function pass garako yo nai call back or higher order function ho
a(sayHi)
// another example function vitra function
a(function(){
    console.log("second example of call back function");
})