function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) return "There is nobody waiting to be served!"
  let currentCustomer = katzDeliLine[0]
  katzDeliLine.splice(0,1)
  return `Currently serving ${currentCustomer}.`
}

function currentLine(katzDeliLine) {
  let description = 'The line is currently'
  if(katzDeliLine.length == 0) {
    return description + " empty."
  } else {
    description = description + ": "
    for(let count = 0; count < katzDeliLine.length; count++) {
      description = description +  `${count + 1}. ${katzDeliLine[count]}, `
    }
    return description.slice(0, -2)
  }
}
