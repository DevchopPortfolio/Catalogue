let focusframe = document.querySelector('#leftframe')



let myrequest = new XMLHttpRequest();
    myrequest.open('GET', 'https://hplussport.com/api/products?order=name');        
    myrequest.send();

    



myrequest.onload = function() {

    
    let jsonString = myrequest.response;	        
    let jsonData = JSON.parse(jsonString); 

    console.log(jsonData)
    
    
    
    jsonData.forEach( (thisitem) => {         

        let newcard = document.querySelector('#cardtemplate').cloneNode(true)
                
        newcard.removeAttribute('id')
        newcard.classList.add('card')
        newcard.querySelector('img').setAttribute('src', thisitem.image)
        newcard.querySelector('div').innerText = thisitem.name
        
        newcard.addEventListener('click', () => {
            populatefocusframe(thisitem)
        })
        
        document.querySelector('#rightframe').appendChild(newcard);
    
    })

};





function populatefocusframe (thisitem) {    
    focusframe.querySelector('#focusname').innerText = thisitem.name        
    focusframe.querySelector('#focusdesc').innerHTML = thisitem.description    
    focusframe.querySelector('#focusimg').setAttribute('src', thisitem.image)        
    focusframe.querySelector('#focusprice').innerText = '£' + thisitem.price    
}

