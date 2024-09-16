let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;

let colors = ['red', 'yellow', 'green', 'purple'];

h2 = document.querySelector('h2');

document.addEventListener('keydown', function(event) {
    if (!started) {
        console.log("game started");
        started = true ;
        
        levelUp();
    }
})

function levelUp() {
    level++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = colors[randomIdx];

    let button = document.querySelector(`.${randomColor}`);
    console.log(`flashing the button with color ${randomColor}`);  
    gameFlash(button);
    
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },0.4*1000);
}

function userFlash(btn) {
    //some code
    

    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },0.4*1000);
}


// add event listeners to all the buttons 

let allButtons = document.querySelectorAll('.btn');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", btnPress); 
}


function btnPress() {
    let btn = this;
    userFlash(this);
}
