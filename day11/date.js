//  day 11 date and math object
// tutorial
// Date and time in depth in javascript | chair aur #javascript

// date patta lagauna object banainxa ra tesma new Date() key use garinxa
let myDate=new Date()
// currant date show garxa
console.log(myDate);
// change into String
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// when give parameter 
//  month chai 0 bata stary hunxa so 0=january
let myDate2 =new Date(2025,1,23)
console.log(myDate2.toLocaleString());

// current date nikalne tarika ==> aske lagi Date.now() key use garinx
console.log("currant date nikalne tarika")
let curretDate=Date.now()
// miliseconf ma value aako ho
console.log(curretDate);