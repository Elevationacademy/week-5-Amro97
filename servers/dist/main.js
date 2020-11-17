const fetchPriceData = function () {
    let input = $("#furniture-input").val()

    $.get(`priceCheck/${input}`, function (priceData) {
        $("body").append(`<div>This item costs - ${priceData.price}`)
    })
}

const fetchBuy = function () {
    let input = $("#buy-input").val()

    $.get(`buy/${input}`, function (obj) {
        $("body").append(`<div>Congratulations, you've just bought ${obj.name} for ${obj.price}. There are ${obj.inventory} left now in the store.`)
    })
}