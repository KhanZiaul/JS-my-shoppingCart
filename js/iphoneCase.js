// iphone case plus and minus button function

function updateButtonCase(isIncrease){

    const inputId = document.getElementById('input-iphone-case');

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

    const totalIphoneAmount = 59 * newPhoneNumber;

    document.getElementById('iphone-case-price').innerText = totalIphoneAmount;
}

// iphone case plus button

 document.getElementById('case-plus-btn').addEventListener('click',function(){

    updateButtonCase(true);

});

// iphone case minus button

document.getElementById('case-minus-btn').addEventListener('click',function(){

    updateButtonCase(false);
});

//remove iphone

document.getElementById('remove-case').addEventListener('click',function(e){

   e.target.parentNode.parentNode.parentNode.classList.add('d-none');
});