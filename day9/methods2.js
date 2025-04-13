// 2method==> constructor ko jasto yo jaele ni singleton hunxa 
// singleton vaneko autai tarako object ho
// tutorail
// Objects in Javascript part 2 in Hindi | chai aur #javascript 


console.log("methode2 sigleton or contructor method");
// const tinderUser={
//     id:"123bc",
//     name:"aman",
//     islogedin:"false"
// }

//  same object tal banako mtra ho by usig singleton
//  yo bauan new word ra Object() symble use garinxa
const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="aman"
tinderUser.islogedin="false"
console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullname:{
            firstName:"aman",
            lastName:"chaudhary"
        }
    }
}
console.log(regularUser);
// . dot .dot key use garer value use garna siknxa
console.log(regularUser.fullName.userFullname);

//  joining of two object  asko lagi  Object.assign() function us garinxa
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);
//  another way to join object yo chai badhai use garinxa
const obj4={...obj1,...obj2}
console.log(obj4);

// banako object ko keys matra nikalne tarika yo dherai use garinxa
// Object.keys() method use garinxa
console.log(Object.keys(tinderUser));