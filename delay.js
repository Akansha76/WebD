console.log();
function waitAsec(){
    let curr_time=new Date().getTime();
    let fun_time=curr_time+1000; //1 sec=1000
    while(new Date().getTime()<fut_time);
}
function waitAsec(n){
    for(let i=0;i<n;i++){
        waitAsec();
    }
}

waitAsec(6);//the above loop run 6 time

// console.log(new DataTransfer().getTime());
// let curr_time=new Date().getTime();
// let fun_time=curr_time+1000;
 console.log("hello");
//waitAsec();
setTimeout(()=>{ //take callback fun and provide time delay make code ashynchronuos
   console.log("inside setTimeout");
},5000)
console.log("world");
