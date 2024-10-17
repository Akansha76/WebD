//fuction statment
let a=4,b=7
function sum(a,b){
     console.log(a+b);
     //return a+b;
}
sum(4,6)
//function expression
const multiply=function(a,b){
        return a*b;
}
console.log(multiply(a,b));
// //arrow function
// const sum=() =>{
    
// }

function calculator(a,b,sign){ //HOF(higher order function)
        // let a=20;
        // let b=30;
        if(sign=='+'){
                console.log(add(a,b));
        }
        if(sign='-'){
                console.log(sub(a,b));
        }
    console.log(add(a,b));
    console.log(sub(a,b));
    console.log(multi(a,b));
}
function add(a,b){
        return a+b;
}
function sub(a,b){
        return a-b;
}
function multi(a,b){
        return a*b;

}
calculator(add,sub,multi);//add,sub,mul is callback function