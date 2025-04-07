// 3types ofloops,  for, while and dowhile loop or iterators
//  1 for loop yo chai blockscope ma kam garxa  so same variable {} vitra banauna milxa
// tutorial
// For loop with break and continue in javascript | chai aur #javascript
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}


//  literals in use vako xa ` ${} ` use garinxa

for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`innerloop valuse ${j}`);
        console.log(i+'*'+j+'='+i*j);
        }
    
}

// for loop use in array and arry banauna [] use garinxa
// condtion chake ma  index.length navayar banako array matlab myArray.lenght hunxa
let myArray=["flash","aman","superman"]
// arry ko lengh patta lagako
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
 
// break and continue use 
// break use grad flow bata bahir aauxa
// continue garda auta matra ru navai aru start hunxa
console.log("break key use");
for (let j = 0; j < 10; j++) {
    console.log(`number printed ${j}`);
    if(j==5){
        break;
    }
}

// continue le ek tal maf garxa 
console.log("continue key use");
for (let j = 0; j < 10; j++) {
    console.log(`number printed ${j}`);
    if(j==5){
        console.log("5 dictected");
        continue;
    }
}