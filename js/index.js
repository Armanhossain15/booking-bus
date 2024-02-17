const siteId = document.getElementById('sit-plan')

siteId.addEventListener('click', function (event) {
    const element = event.target.innerText
    addBgColor(element)
    addSeatQuantity()
    removeSeatQuantity()
    addSeatNameOnListing(element)
})