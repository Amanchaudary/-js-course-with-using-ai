// Closures and lexical scope
// tutorial
// Lexical scoping and Closure | chai aur #javascript
console.log("learn about lexical scope");
// lexical scope( function vitra function case huda)

// note==> function vitra function banauda outer function ko variable  inner function le axcess garna milxa ahi nai lexical scope ho asma scope thery le kam gardian
function init(){
    let name="Monzilla"
    function displayName(){
        console.log(name);
    }
    function innerTwo(){
        console.log("inner two",name);
    }
    displayName()
    innerTwo()
}
init()
// console.log(name);


// closer in js==> 14.25 sec
console.log("learn about closer");

// return key le garda sabai scope janxa ==> outer and innner both janxa
function makefunc(){
    const name="mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName
}
const myFunc=makefunc();
myFunc()


