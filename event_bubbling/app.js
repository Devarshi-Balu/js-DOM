div = document.querySelector('.container');

ul = document.querySelector('ul');

li = document.querySelector('li');

function callback (event) {
    console.log(`${this.tagName.toLowerCase()} was clicked`);
    // console.dir(event.srcElement);
    // console.dir(this);
    event.stopPropagation();
}

div.addEventListener('click', callback);
ul.addEventListener('click',callback );
li.addEventListener('click', callback);


