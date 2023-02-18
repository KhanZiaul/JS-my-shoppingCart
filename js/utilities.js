// function 

function subTotal(){

    const iphonePrice = document.getElementById('iphone-price').innerText;

    const iphonePriceInNumber = parseInt(iphonePrice);

    const iphoneCasePrice = document.getElementById('iphone-case-price').innerText;

    const iphoneCasePriceInNumber = parseInt(iphoneCasePrice);

    const total = iphonePriceInNumber + iphoneCasePriceInNumber;

    document.getElementById('subtotal').innerText = total;

}

function tax(){

    const subTotalInString = document.getElementById('subtotal').innerText;

    const subTotalInNumber = parseInt(subTotalInString);

    const tax = subTotalInNumber * 0.1 ;

    document.getElementById('tax').innerText = tax.toFixed(2);
}

function total(){

    const subTotalInString = document.getElementById('subtotal').innerText;

    const subTotalInNumber = parseFloat(subTotalInString);

    const taxInstring = document.getElementById('tax').innerText;

    const taxInNumber = parseFloat(taxInstring);

    const total = subTotalInNumber + taxInNumber;

    document.getElementById('total').innerText = total.toFixed(2);
}