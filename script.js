function dropDown(event) {
   // let dropDownItems = document.querySelector('.drop-down-items');
    //set style of display from event 
    console.log(event)
    let displayVal = event.target.nextElementSibling.attributes[1].value
    let dropDownItems = event.target.nextElementSibling
    console.log(displayVal + dropDownItems);
    if (displayVal === 'display: none;') {
        dropDownItems.style.display = 'block';
    } else {
        dropDownItems.style.display = 'none';
    }
    
    console.log(event);
}
