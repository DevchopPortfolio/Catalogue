let focusframe = document.querySelector('#leftframe');

// create request
let myrequest = new XMLHttpRequest();
    myrequest.open('GET', 'https://hplussport.com/api/products?order=name');        
    myrequest.send();


// receive request
myrequest.onload = function() {
    
    let jsonString = myrequest.response;	        
    let jsonData = JSON.parse(jsonString); 

    console.log(jsonData);
    
    // loop once for each product in the json file
    jsonData.forEach( (thisitem) => {         

        // make clone of card template element
        let newcard = document.querySelector('#cardtemplate').cloneNode(true);
        
        // set attributes/content to clone
        newcard.removeAttribute('id');
        newcard.classList.add('card');
        newcard.querySelector('img').setAttribute('src', thisitem.image);
        newcard.querySelector('div').innerText = thisitem.name;
        
        // add event listener to clone
        newcard.addEventListener('click', () => {
            populateFocusFrame(thisitem);
        });
        
        // attach clone to the DOM
        document.querySelector('#rightframe').appendChild(newcard);
    
    });
};


// populate the Focus Frame with the currently selected product
function populateFocusFrame (thisitem) {    
    focusframe.querySelector('#focusname').innerText = thisitem.name;
    focusframe.querySelector('#focusdesc').innerHTML = thisitem.description;
    focusframe.querySelector('#focusimg').setAttribute('src', thisitem.image);
    focusframe.querySelector('#focusprice').innerText = '£' + thisitem.price;
}
