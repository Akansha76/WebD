let name="Akanksha"
let char='x'
console.log(typeof(char));

let oject

const arr=[1,"abcd",true,null,undefined,[]];
arr.push(3);
console.log(arr)

arr.unshift("hello")

arr.shift();
//arr.slice(start idx ,end idx);
let newArr=arr.slice(2,4);
newArr.push("newValue")

let newArr1=arr.splice();
console.log(newArr);
console.log(arr);


let newArr2=arr.splice();
console.log(newArr);
let s;
for(let i=0;i<arr.length;i++){
    s=arr.indexOf(null);
}
console.log(s);

for(let i in arr){  // in iterate on index and of on value
    console.log(i);
}

for(let idx in arr){
    console.log(arr[idx]);
}
let arr1=arr;
console.log(arr1);
let arr2=[...arr ,...arr];//spread operator use to join infinitw array
console.log(arr2);


let person={
    name:"abcd",
    age:24,//|_any datatype
    salary:5432
    
}
console.log(person["age"]);

