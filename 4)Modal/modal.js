
const buttonOpen=document.getElementById('button');
const container=document.querySelector(".container");
const modal= document.querySelector('.container__modal');
const buttonClose=document.querySelector('.fas');

buttonOpen.addEventListener('click',()=>{
    container.classList.toggle('content');
    modal.classList.toggle('context');
})

buttonClose.addEventListener('click',()=>{
    container.classList.toggle('content');
    modal.classList.toggle('context');
})
