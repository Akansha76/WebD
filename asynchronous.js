//1. settimeout

console.log("hello");
//waitAsec();
setTimeout(()=>{ //take callback fun and provide time delay make code ashynchronuos
   console.log("inside setTimeout");
},5000)
let id=setInterval(()=>{
    console.log('data is fetched');
},1000)
console.log("world");

setInterval(()=>{
    clearInterval(id);
},8000);
console.log("world");


((a,b)=>{
    console.log(`sum of a & b ${a+b}`)
})(10,15)

let student=(function IIFE(){
    let marks=90;
    function student(){
        details();
    }
    function details(){
        console.log(`percentage :${(marks/100)*100}`)
    }
    return student;
})();
student();


function placeorder(fg){
    setTimeout(()=>{
        console.log("order placed");
        fg();
    }2000);
}
