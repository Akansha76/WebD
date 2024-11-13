let container=document.getElementById('container');
container.addEventListener('click',(e)=>{
    console.log(e)
    if(e.target.tagName=='Button'){
        let value=Number(e.target.textContent);
        let res=0;
        if(e.target.textContent=='+'){
            res+=value;
        }
    }
})
