function addBgColor (elementId){
    const element = document.getElementById(elementId)
    element.setAttribute("class", "bg-[#1DD100]	w-28 h-12 flex items-center justify-center rounded text-white");
}

function addSeatQuantity(){
    const seatQuantity = document.getElementById('seat-quantity')
    const seatQuantitytext =  seatQuantity.innerText
    const seatQuantityNumber = parseInt(seatQuantitytext)
    const newSeatQuanitity = seatQuantityNumber + 1
    seatQuantity.innerText = newSeatQuanitity
}

function removeSeatQuantity(){
    const remainingSeat = document.getElementById('remaining-seat')
    const remainingSeattext =  remainingSeat.innerText
    const remainingSeatNumber = parseInt(remainingSeattext)
    const newremainingSeat = remainingSeatNumber - 1
    remainingSeat.innerText = newremainingSeat
}

function addSeatNameOnListing(elementId){
    //add seat Name
    const seatNames = document.getElementById('seat-name')
    const p = document.createElement('p')
    p.innerText = elementId
    seatNames.appendChild(p)

    //add seat Class Name
    const seatClassNames = document.getElementById('seat-class-name')
    const p1 = document.createElement('p')
    p1.innerText = 'Economoy'
    seatClassNames.appendChild(p1)

    //add Seat Price
    const seatPrice = document.getElementById('seat-price')
    const p2 = document.createElement('p')
    p2.innerText = 550
    p2.classList.add('selected-seat-price')
    seatPrice.appendChild(p2)

}

function addTotalPrice(elementId){
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    const totalPrice = document.getElementById('total-price')
    const newTotalPrice = elementValue + 550
    totalPrice.innerText = newTotalPrice
    const GrandTotal = document.getElementById('Grand-total')
    GrandTotal.innerText = newTotalPrice
}

function discount(disabledPercent){
        const totalPrice = document.getElementById('total-price')
        const totalPricetext = totalPrice.innerText
        const totalPriceNumber = parseInt(totalPricetext)
        const discount = totalPriceNumber * disabledPercent / 100
        const newTotalPrice= totalPriceNumber - discount
        const grandTotal = document.getElementById('Grand-total')
        grandTotal.innerText = newTotalPrice
}