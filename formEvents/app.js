// let inp = document.querySelector('input');

// inp.addEventListener('keyup', function(event) {
//     console.log("keyUp is performed");
//     console.dir(event);
// })


let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    console.log('form submitted the event object - ', event);
    alert("form is about to submit");
    event.preventDefault();

    let inp = document.querySelector('input');
    // you cannot get its value using the innerText property 

    console.log(inp.innerText);
    console.log(inp.value);
    console.dir(form);

}) 


let input = document.querySelector(".text-editor");
let para = document.createElement('p')
para.style.width = "100dvw";
para.style.height = "40px";
para.style.border = "1px solid black";
para.style.backgroundColor = "yellow";
input.insertAdjacentElement('beforebegin', para);
input.style.display = "block";


input.addEventListener("input", function(event) {
    this.previousElementSibling.innerText = this.value ;
})
