

const btn=document.getElementById("btn-btn");
const color=document.querySelector(".color");

btn.addEventListener('click', function(){
    const color ='rgb('+ random(155)+','+random(225)+','+random(225)+')'
    document.body.style.backgroundColor = color;
});

function random(number){
    return Math.floor(Math.random()* (number+1));
}



