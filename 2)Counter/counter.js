const increase=document.querySelector('.increase');
const reset=document.querySelector('.reset');
const decrease=document.querySelector('.decrease');
const valor=document.getElementById('value');
let vacio=0;
increase.addEventListener('click',()=>{
        vacio++;
        valor.textContent=vacio
        if(vacio>0){
            valor.style.color="darkgreen"
        }
})

reset.addEventListener('click',()=>{
        vacio=0;
        valor.textContent=0;
        if(vacio==0){
            valor.style.color="rgb(29, 26, 32)";
        }
        

})

decrease.addEventListener('click',()=>{
        vacio--;
        valor.textContent=vacio;
        if(vacio<0){
            valor.style.color="red"
        }
})