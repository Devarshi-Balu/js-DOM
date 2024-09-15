let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;

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

}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },0.225*1000);
}


