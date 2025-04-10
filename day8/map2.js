//  this is another video about array method  map,filter and reduce
// tutorial
// Map, Filter & Reduce in JavaScript | JavaScript Tutorial in Hindi #20


// 1 map ==> it creats a new array by performing some oprataion on each array element and
//  value add garna pani use garinxa
console.log("map methode of array");
let arr=[45,23,21]
console.log(arr);
 let a=arr.map((value)=>{
    console.log(value);
    return value+1
})
console.log(a);

//  filter methode  asma array function use garinxa ra return key use garinxa
console.log("filter method in array");
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2);

// method 3 reduce method
// asle value return garxa
console.log("reduce method in array");
let array3=[1,2,3,5,2,1]
let newarr3=array3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3);