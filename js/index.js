const siteId = document.getElementById('sit-plan')
siteId.addEventListener('click', function (event) {
    const element = event.target.innerText
    const siteNameChildsArrayLength= siteNameArrayLength('seat-name')
    if(siteNameChildsArrayLength <=4){
        addBgColor(element)
        addSeatQuantity()
        removeSeatQuantity()
        addSeatNameOnListing(element)
        addTotalPrice('total-price')
    }
    else{
        alert('MORE THEN 4 SEAT NOT ALLOWED')
    }
})
document.getElementById('number-input-field').addEventListener('keyup',function(event){
    const inputValue = event.target.value
    const inputValueLength = inputValue.length
    const seatQuantity = document.getElementById('seat-quantity')
    const btnNext = document.getElementById('btn-next')
    if(seatQuantity.innerText>=1 && inputValueLength >= 1) {
         btnNext.removeAttribute('disabled')
    }
     else{
        btnNext.setAttribute('disabled', true)
     }
    
})
document.getElementById('cupon-field').addEventListener('keyup', function (event) {
    const inputValue = event.target.value
    const btnApply = document.getElementById('btn-apply')
    const seatQuantity = document.getElementById('seat-quantity')
    if ( seatQuantity.innerText>=4 && inputValue === 'NEW15') {
        btnApply.removeAttribute('disabled')
    }
    else if ( seatQuantity.innerText>=4 && inputValue === 'Couple 20') {
        btnApply.removeAttribute('disabled')
    }
    else {
        btnApply.setAttribute('disabled', true)
    }
})

document.getElementById('btn-apply').addEventListener('click', function () {
    const cuponField = document.getElementById('cupon-field')
    const cuponFieldValue = cuponField.value
    const cuponInputFieldDiv = document.getElementById('cupon-input-field-div')
    if (cuponFieldValue === 'NEW15') {
        discount(15)
        cuponInputFieldDiv.classList.add('hidden')
        
    }
    else if (cuponFieldValue === 'Couple 20') {
        discount(20)
        cuponInputFieldDiv.classList.add('hidden')
    }
})
