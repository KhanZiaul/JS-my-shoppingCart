// iphone plus button

function updateButton(isIncrease){

    const inputId = document.getElementById('input-iphone');

    const inputIdValue = inputId.value;

    const inputIdValueInNumber = parseInt(inputIdValue);


    if(isIncrease){

        inputId.value =  inputIdValueInNumber + 1;

    }
    else{
        
        inputId.value =  inputIdValueInNumber - 1;
    }

    const totalIphoneAmount = 1219 * inputIdValueInNumber;

    document.getElementById('iphone-price').innerText = totalIphoneAmount;
}

 document.getElementById('plus-btn').addEventListener('click',function(){

    updateButton(true);

});

// iphone minus button

document.getElementById('minus-btn').addEventListener('click',function(){

    updateButton(false);
});

//remove iphone

document.getElementById('remove').addEventListener('click',function(e){

   e.target.parentNode.parentNode.parentNode.classList.add('d-none');
});