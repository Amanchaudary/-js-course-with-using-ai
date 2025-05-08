// Higher order function
// tutorail
// Higher Order Function in JavaScript in Hindi 2020

const interviewquestion=(name)=>{
    if(name=="aman"){
        return function(topic){
            console.log(`Hiii ${name}.what is ${topic}.please explain us`);
        }
    }
    if(name=="chaudhary"){
        return function(topic){
            console.log(`Hiii ${name}.what is ${topic}.please explain us`);
        }
    }else{
        return function(){
            console.log("welcome to interview");
        }
    }
}
// calling gareko function==>  function(function)(argument)
interviewquestion("aman")("ui")
interviewquestion("aman")("full Stack developer")
