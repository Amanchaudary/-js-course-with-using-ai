// function curing and memoization
// tutorail
// Memoization in JavaScript Explained in Hindi
// memoization==>> it is a techinue tp make application more effciend and hence faster


const addwith50=(num)=>num+50
console.log(addwith50(1000));
console.log(addwith50(1000));
console.log(addwith50(1000));
console.log(addwith50(1000));

// memoization
const lookup={};
const smartaddwith50=(num)=>{
    if(num in lookup){
        return lookup[num]
    }else{
        lookup[num]=num+50
        return lookup[num]
    }
}
console.log(smartaddwith50(10));