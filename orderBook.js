const reconcileOrder = (existingBook, incomingOrder) => {
  const newBook = []
  let newTransaction = incomingOrder

  for (let i = 0; i < existingBook.length; i++) {
    if (existingBook[i].price === incomingOrder.price && existingBook[i].type !== incomingOrder.type) {
      newTransaction = transactionToLog(existingBook[i], newTransaction)
    } else if (existingBook[i].price > incomingOrder.price && existingBook[i].type !== incomingOrder.type &&
              existingBook[i].type === 'buy') {
      newTransaction = transactionToLog(existingBook[i], newTransaction)
    } else { newBook.push(existingBook[i]) }
  }
  if (newTransaction !== null) {
    newBook.push(newTransaction)
  }

  return newBook
}

const transactionToLog = (existingBook, newTransaction) => {
  if ((existingBook.quantity) - (newTransaction.quantity) === 0) {
    return null
  }
  if ((existingBook.quantity) - (newTransaction.quantity) < 0) {
    const newQuantity = (newTransaction.quantity) - (existingBook.quantity)

    return { ...existingBook, quantity: newQuantity, type: newTransaction.type }
  }
  const newQuantity = (existingBook.quantity) - (newTransaction.quantity)

  return { ...existingBook, quantity: newQuantity }
}

module.exports = reconcileOrder
