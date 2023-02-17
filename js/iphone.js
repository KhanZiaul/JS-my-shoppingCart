// iphone plus and minus button function

function updateButton(isIncrease){

    const inputId = document.getElementById('input-iphone');

    const inputIdValue = inputId.value;

    const inputIdValueInNumber = parseInt(inputIdValue);

    let newPhoneNumber;

    if(isIncrease){

        newPhoneNumber =  inputIdValueInNumber + 1;

    }
    else{
        
        newPhoneNumber =  inputIdValueInNumber - 1;
    }

    inputId.value = newPhoneNumber;

    const totalIphoneAmount = 1219 * newPhoneNumber;

    document.getElementById('iphone-price').innerText = totalIphoneAmount;
}

// iphone plus button

 document.getElementById('plus-btn').addEventListener('click',function(){

    updateButton(true);

});

// iphone minus button

document.getElementById('minus-btn').addEventListener('click',function(){

    updateButton(false);
});

//remove iphone

document.getElementById('remove-iphone').addEventListener('click',function(e){

   e.target.parentNode.parentNode.parentNode.classList.add('d-none');
});