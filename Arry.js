//map
let arr=[1,2,3,4,5,6]
let new_arr=arr.map(mymap)
function mymap(item){
    return item*3;
}
console.log(new_arr);

//filer
let arr1=[2,20,15,]
let newarr=arr.filter(item=>(item%2!=0));
{
   console.log(newarr);
}
//reduce
let arr2=[10,15,20,25,30]
let new_arr2=arr2.reduce((acc,currvalue)=>{
    acc=acc+currvalue;
    return acc;
})
console.log(new_arr2);

// Q-given an array of no. filter out the even number then double the value of 
//remaining number & then calculate their sum

//even
let arr3=[15,19,20,22,18,13,16,11]
let newarr1=arr3.filter(item=>(item%2!=0));
{
   console.log(newarr1);
}
//double

let new_arr3=newarr1.map(mymap)
function mymap(item){
    return item*2;
}
console.log(new_arr3);
//sum
let new_arr4=new_arr3.reduce((acc,currvalue)=>{
    acc=acc+currvalue;
    return acc;
},0)
console.log(new_arr4);

