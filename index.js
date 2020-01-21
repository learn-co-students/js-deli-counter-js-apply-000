function takeANumber (katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + katzDeliLine.shift() + "."
    }
  }

function currentLine (katzDeliLine) {
  var lineString = "The line is currently: "
   if (katzDeliLine.length === 0) {
    return "The line is currently empty."
    } else {
      var i = 0
      for (i = 0; i < katzDeliLine.length; i++) {
        lineString += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
      return lineString.slice(0, (lineString.length -2))
  }
}