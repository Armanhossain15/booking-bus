const siteId = document.getElementById('sit-plan')
siteId.addEventListener('click', function (event) {
    const element = event.target.innerText
    const seatName = document.getElementById('seat-name')
    const siteNameChilds = seatName.childNodes
    const siteNameChildsArray = []
    for (const siteNameChild of siteNameChilds) {
        siteNameChildsArray.push(siteNameChild)
    }
    const siteNameChildsArrayLength =  siteNameChildsArray.length
    if(siteNameChildsArrayLength <=3){
        addBgColor(element)
        addSeatQuantity()
        removeSeatQuantity()
        addSeatNameOnListing(element)
        addTotalPrice('total-price')
        console.log('yes')
    }
    else{
        console.log('no')
    }
})

document.getElementById('cupon-field').addEventListener('keyup', function (event) {
    const inputValue = event.target.value
    const btnApply = document.getElementById('btn-apply')
    if (inputValue === 'NEW15') {
        btnApply.removeAttribute('disabled')
    }
    else if (inputValue === 'Couple 20') {
        btnApply.removeAttribute('disabled')
    }
    else {
        btnApply.setAttribute('disabled', true)
    }
})

document.getElementById('btn-apply').addEventListener('click', function () {
    const cuponField = document.getElementById('cupon-field')
    const cuponFieldValue = cuponField.value
    
    if (cuponFieldValue === 'NEW15') {
        discount(15)
    }
    else if (cuponFieldValue === 'Couple 20') {
        discount(20)
    }
})

