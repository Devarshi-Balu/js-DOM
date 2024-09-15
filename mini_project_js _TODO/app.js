let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');


ul.addEventListener('click', function(event) {
    console.log("button clicked");
    console.dir(event.target);

})


function createTaskElement(text) {
    let listItem = document.createElement('li');
    listItem.innerText = text ;

    let  deleleteButton = document.createElement('button');
    deleleteButton.innerText = "Delete";
    //add some styling to the button using the delete button class ;
    deleleteButton.classList.add("deleteButton");

    listItem.appendChild(deleleteButton);
    //add an event listener to the delete button 
    // when clicked it should delete the orginal li element itself ;


    // deleleteButton.addEventListener('click', function() {
    //     this.parentElement.remove();
    // });
    // lets try to remove the elements without add a individual event listener to every delete button

    return listItem;
}


function addTask () {
    let text = inp.value ;
    text = text.trim();
    if(text) {
        ul.appendChild(createTaskElement(text));
        inp.value = "";
    }
}


btn.addEventListener('click', addTask);
inp.addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        addTask();
    }else{
        return ;
    }
});


ul.addEventListener('click', function(event) {
    if (event.target.nodeName == "BUTTON" && event.target.innerText =="Delete"){
        event.target.parentElement.remove();        
    }
})




