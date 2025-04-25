// scope(Globle,local,block)
// tutorail
// Global and local scope in javascript | chai aur #javascript

//  let conste and var ko concept ho  ==> jaba {} bracket aauxaa tab aslai nai scope vanxa
//  function, condition ,ifelse, loop  haru sanga aauda {} chai scope banxa object ma scope bandain

var c=300
let a=300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(`inner a vlue ${a}`);
}
console.log(a);
// console.log(b);
console.log(c);

// globle scope ==> yo vaneko {}vitra navai bahir ni kam garne
// block scope==> {}vitra matra kam garne

// let and const ==> block level
//  var==> globle scope