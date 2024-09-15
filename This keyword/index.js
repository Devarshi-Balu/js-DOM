function changeColor () {   
    this.style.backgroundColor = "blue";
}


elements = document.querySelector('body').children;
console.log(elements)

for (let i =0; i < elements.length; i++) {
    elements[i].addEventListener('click', changeColor);
}


