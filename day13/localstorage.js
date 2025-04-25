// localStorage in js
// tutorail
// localStorage & related methods | JavaScript Tutorial in Hindi #69
//  yo chai datebase jastai ho data save Garna use garinxa yo chai refresh garda pani date delete hudain


let key=prompt("enter key you want to set")
let value=prompt("enter value you want to set")
// syntex
localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localStorage.getItem(key)} `);

if(key=="red"||key=="blue"){
    localStorage.removeItem(key)
}
if(key==0){
    localStorage.clear()
}

// note localstorage ko methed haru photo ma xa use garna sikne