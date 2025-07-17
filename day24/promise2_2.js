// video55
// Promise .then() and .catch() | JavaScript Tutorial in Hindi #55
let p=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        console.log("i am a promiss i am fullfilled");
        resolve(true)
    },5000)
})
console.log(p);