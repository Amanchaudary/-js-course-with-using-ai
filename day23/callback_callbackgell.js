//  callback and callback Hell
// tutorail
// Callback Functions & Callback Hell in JavaScript | Lecture 22 | JavaScript Tutorial in Hindi | 2024

// callback function==> testo function jun function chai arko function ko argument ko form ma use vako xa
function add(a,b){
    console.log(a+b);
}
// in syncronous
// calculate function vitra arko function addname gareko argument ko form ma pass gareko xa
// function calculate(a,b,add){
//  console.log("result is :", add(a,b))
// }
// calculate(4,6,add)
// setTimeout(()=>{
//     add(3,5)
// },5000)

// in asynchronous
setTimeout(()=>{
    add(3,5)
},2000)
// in event handling
// asma addeventlistner auta function ho jasma arko function jasle hello dinxa tyo pass garko xa
 button.addEventListener("click",function(){
    console.log("hello");
 })
