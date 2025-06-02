// Promises & then() and catch()
// tutorial
// Promise in javascript | chai aur #javascript

// promiss==>future ma complete hune task ho ani asko 3 ota state hnxa pending,fulfilled,rejected
// fetch('https:something.com').then().catch.finally()
// method of making promiss

//example1 
const promissOne=new Promise(function(resolve,reject){
    // Do an async task
    // Db calls ,cryptograpy,networks
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})
promissOne.then(function(){
    console.log("promiss consume");
})

//example2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

// example3
 const promissThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"amancdy@gmal.com"})
    },1000)
 })
 promissThree.then(function(user){
  console.log(user);
 })

//  example4
 const promissFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitsh",password:"123"})
        }else{
            reject('ERROR: Something went worng')
        }
    },1000)
 })
 promissFour.then((user)=>{
    console.log(user);
    return user.username
 }).then((username)=>{
    console.log(username);
 }).catch(function(error){
    console.log("error");
 })