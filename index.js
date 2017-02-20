var katzDeliLine = []

function takeANumber(katzDeliLine, cName) {
  katzDeliLine.push(cName)
  return "Welcome, " + cName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  var katzDeliLineLength = katzDeliLine.length

  if (katzDeliLineLength === 0) {
    return "The line is currently empty."
  }
  else {
    var arrLine = []
    for (var i = 0; i < katzDeliLineLength; i++) {
      var j = i+1
      arrLine.push(" " + j + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + arrLine.join()
  }
}
