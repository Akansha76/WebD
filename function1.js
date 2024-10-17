function fun1(){
    let a=10;
    let b=20;

    function fun2(){
        return a+b;
    }
    return fun2;
}
let returnFunction=fun1();
console.log(returnFunction());



function fun3(){
    let a=10;
    let b=20;

    function fun4(){
        let c=40;
        function  fun5() {
            return a+b+c;
        }
        return fun5();
      
    }
    return fun4;
}
console.log(fun3()());

let person={
    name:"audi",
    age:20,
    education:"b.tech"
}
for(let Key in person){
    console.log(person[Key]);
}
for(let Value in person){
    console.log(person[Value]);
}