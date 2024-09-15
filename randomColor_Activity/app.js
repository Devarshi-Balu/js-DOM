function generateRandomColor() {
    let red = Math.floor(Math.random()*255) ;
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})` ;

    return color;

}

button= document.querySelector('div.container .btn');

button.addEventListener("click", function(parameter) {
    let randomColor = generateRandomColor();
    let div = document.querySelector(".color_displayer");

    div.style.backgroundColor = randomColor ;
    let heading = document.querySelector('.container h1');
    heading.innerText = randomColor ;   

    console.log(parameter);
    this.style.backgroundColor = randomColor;
    this.style.padding = "10px 10px ";
    this.style.color = "white";

})




