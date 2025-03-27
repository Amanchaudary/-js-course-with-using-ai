//  day 2 Data types

// tutorial video link
// Data types of javascript summary | chai aur #javascript
// data lai memory ma kun tarikale save gareko xa ra kun tarika le axcess garna sakinxa tyo anuser aslai 2 type ma  
// devide gareko xa

// 1 primitive data type
// 7 types(String ,Number,Boolean,Null,undefined,Symble,BigInt)

// number
const score=100;

// String yo chai double and single and tripal qort ma lekhinxa
const a="aman"

// boolean yo chai true and false ma use garinxa
 const isLoggedIn =false

//  Null null ko matlab value zero hoena
const outSideTemp =null

// Symble
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//BigInt yo chai thulo number save garna use garinxa kunai number ma last ma n lekda tyo bigint banxa
const bigNumber=33464747477477n


// 2 non-primitive data type or Reference data type
// (Array,Objects,Functions)  

// array   yo chai thulo bracked vitra lekinxa
const heros=["ironman","thor","caption amerika"]

// object yo chai key value ma use garinxa ra small barcket ma lekinxa
const myObj={
    name:"aman",
    age:24
}

// function  yo chai use gard function()key use garinxa

const aman=function(){
    console.log("this is function");
}

// summary
// to find  dattype  typeof paxi variable name lekne 
// kosle kosle k type show garxa herna photo herne
console.log(typeof aman);
console.log(typeof myObj);
console.log(typeof heros);


