var greeting = null
var lineLength = null
var lineStatement = ''
var thisPatron = null

function takeANumber(currentDeliLine, newCustomer){
  lineLength = currentDeliLine.length + 1
  greeting = 'Welcome, ' + newCustomer + '. You are number ' + lineLength + ' in line.'
  currentDeliLine.push(newCustomer)
  return greeting
}

function nowServing (currentDeliLine) {
    if (currentDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
  } else {
    thisPatron = currentDeliLine[0]
    currentDeliLine.shift()
    return "Currently serving " + thisPatron + "."
  }
}

function currentLine (currentDeliLine) {
  if (currentDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i = 0
    while (i < currentDeliLine.length){
      lineStatement +=  i + 1 + ". " + currentDeliLine[i] + ", "
      i++
    }
    return "The line is currently: " + lineStatement.slice(0,-2)
  }
}