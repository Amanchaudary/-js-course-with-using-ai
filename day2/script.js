//  day 2  different betweeen ver let const and variable

// tutorial video
// const, let and var in JavaScript | JavaScript Tutorial in Hindi #3 

// 1 var
// var yo chai es6 huda use garintho sakesamma kam use grne
// es6 exmascript6 which mean modernjavascript
// car chai globle scope hunxa that mean yo chai block vitra use garna use garidain
// eg
var a=5
{
    var b="aman"
    console.log(a);
}
console.log(b);
// ahile vitra bahir 2ota mai var xa so thik ca thar bracket ma let halda answer change hunxa
// vaar can be redeclear that why ica take make more bugs

// 2let 
//  let lai same scope ma re declear garna sakidain tar update garna sakinxa
let c="chaudhary"
console.log(c);
{
    let c="don"
    console.log(c);
}

// 2 const
//  yo chai globle scoped hunxa tei vayar const use gari variable banayo vane tyo variable change garna mildain

const e="i am const"
{
        console.log(e);
}

// summary 
//  sake samma code lekda const use garne if change garna paryo vane let garne  var sakesamma kam use garne