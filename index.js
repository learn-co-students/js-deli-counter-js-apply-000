const takeANumber = (deliQueue, newCustomer) => {
  deliQueue.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${deliQueue.length} in line.`
}

const nowServing = (deliQueue) => {
  if(deliQueue.length === 0)
    return 'There is nobody waiting to be served!'

  return `Currently serving ${[...deliQueue.splice(0, 1)]}.`
}

const currentLine = (deliQueue) => {
  if(deliQueue.length === 0)
    return 'The line is currently empty.'

  return `The line is currently:${deliQueue.map((person, index) => ` ${index + 1}. ${person}`)}`
}
