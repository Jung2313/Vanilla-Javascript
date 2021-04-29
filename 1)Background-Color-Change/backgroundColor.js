const button = document.getElementById('change');
const container = document.querySelector('.container');
const label = document.querySelector('.label')

//rgb random
const colorRandom = () => {
    return Math.floor(Math.random() * (255 - 0)) + 0
}
 
button.addEventListener('click', () => {
    //random selection 1 and 0
    const ram=Math.floor(Math.random()* 2 - 1)+ 1;

    if(ram===1){
        //rgb
    const red = container.style.backgroundColor = `rgb(${colorRandom()},${colorRandom()},${colorRandom()})`;
    button.style.backgroundColor = red;
    label.innerText = `${red}`;
    }
    else{
        //hexadecimal
    const blue = container.style.backgroundColor=`${colorHEX()}`
    button.style.backgroundColor = blue;
    label.innerText = `${blue}`;

    }
})

//hexadecimal
const colorHexa=()=> {

    let  colorH = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let i=(Math.random()* 16).toFixed();
       return colorH[i]

    }
    colorHexa()

const colorHEX=()=>{
  let coolor = "";
    for (let i = 0; i < 6; i++) {
        coolor += colorHexa();
    }
    return "#" + coolor;
}

colorHEX();