const burger = document.querySelector(".burger");
const links= document.querySelector('.nav-links');

burger.addEventListener('click',()=>{
    burger.classList.toggle('toggle');
    links.classList.toggle('nav-active');
})