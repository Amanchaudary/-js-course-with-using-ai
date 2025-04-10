// map filter and reduce in js
// tutorail
// Filter map and reduce in javascript | chai aur #javascript

// 1 filter method
console.log("filter operation or filter method in array");
const myNumber=[1,2,3,4,5,6,7,8,9,10]
const num=myNumber.filter((num)=>{
    // conditon deko ra return key use garna parxa
    return num>4
})
console.log(num);

// 2 map method ==. yo pani auta call back function ho
console.log("map method in array");
const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNum.map((num)=>num+10)
console.log(newNum);
// another way ==> jab scope open garinxa tab return key use garna parxa
const newNum2=myNum.map((num)=>num+10)
console.log(newNum2);

// 3 reduce method 
console.log("reduce method in array");
const mynums=[1,2,3]
 const mytotal=mynums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)

console.log(mytotal);
// another method by arrow function
console.log("another method of reduce method");
const mytotal1=mynums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal1);