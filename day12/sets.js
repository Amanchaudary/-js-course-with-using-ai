// Sets in javascripts
// tutorial
// JavaScript Sets | JavaScript Tutorial In Hindi #58

// yo banauna new Set() key use garinxa  ra yo collecton of Object ho
// set stores unique value not a repeted value
const mySet=new Set();  
// adding values in this set
mySet.add('this')
mySet.add('myname')
console.log(mySet);
// note set ma same value halda 2 tal aaudain repete value show gardain 
mySet.add('this')
//  set 2 tal same halda ek tal matra show
console.log(mySet);

// another method to make set
console.log("another method to make sets");
const mySet2=new Set([1,45,'this',false,{a:4,b:8}])
console.log(mySet2);

// size patta lagaune tarik==> .size use gaarinxa
console.log(mySet2.size);
// .has function ==> alse value chake garna use garinxa ra answer bolean ma dinxa
// aman xaena so false dinxa
console.log(mySet2.has('aman'));
// delete elemet from set==> use delete key  .delete(value)
console.log(mySet2.delete(1));
console.log(mySet2);


// iteration of set by using arrow function
mySet2.forEach((item)=>{
    console.log('items is :',item);
})


