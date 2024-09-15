// 


// function to clear all  the event listeners of an Element

function clearEventListeners(object) {
    let oldObject = object;
    let newObject = object.cloneNode(true);    // true for cloning including all the child elements 
    // we will replace the oldNode with this new node;
    oldObject.parentNode.replaceChild(newObject, oldObject);

    console.log("cleared Event listners");
    
    return "clearing succesfull"
}


