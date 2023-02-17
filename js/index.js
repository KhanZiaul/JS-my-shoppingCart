// iphone plus button

document.getElementById('plus-btn').addEventListener('click',function(){

    const inputIphone = document.getElementById('input-iphone').value;

    const inputIphoneInNumber = parseInt(inputIphone);

    document.getElementById('input-iphone').value = inputIphoneInNumber + 1;

});

// iphone minus button

document.getElementById('minus-btn').addEventListener('click',function(){

    const inputIphone = document.getElementById('input-iphone').value;

    const inputIphoneInNumber = parseInt(inputIphone);

    document.getElementById('input-iphone').value = inputIphoneInNumber - 1;


});