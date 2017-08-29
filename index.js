var katzDeli = []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  //If there's nobody left, return "There is nobody waiting to be served!"
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  //returns current line "The line is currently: 1. Ada, 2. Grace"
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
      var personInLine = []
      for (var i = 0; i < katzDeliLine.length; i++) {
        personInLine.push(`${i+1}. ${katzDeliLine[i]}`)
      }
      return `The line is currently: ${personInLine.join(', ')}`
  }
  }
