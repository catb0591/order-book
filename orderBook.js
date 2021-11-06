const reconcileOrder = (existingBook, incomingOrder) => {
    const orderBook = existingBook
    
    orderBook.push(incomingOrder)
    
        return orderBook
}
module.exports = reconcileOrder

//try for loops to increase the sell amounts and the buy amounts. Then add or subtract 

//Have to take into account the quantity and the price. Can you subtract from quantity if value equal amount of new qu

//Book is an array with objects as index?

// book1 = []
// book2 = { type: 'sell', quantity: 10, price: 6150 },{ type: 'sell', quantity: 12, price: 6000 }

// console.log (reconcileOrder(book1, book2))
//for existing 