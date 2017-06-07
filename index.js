var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  katzDeli.push(newName)
  var placeInLine = katzDeliLine.indexOf(newName) + 1
  return "Welcome, " + newName + ". " + "You are number " + placeInLine + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
    } else {
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.splice(0, 1)
    return "Currently serving " + currentCustomer + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var stringy = 'The line is currently: '
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i == katzDeliLine.length -1) {
        stringy += katzDeliLine.indexOf(katzDeliLine[i]) + 1 + ". " + katzDeliLine[i]
      } else {
        stringy += katzDeliLine.indexOf(katzDeliLine[i]) + 1 + ". " + katzDeliLine[i] + ", "
      }
    } return stringy
  }
}
