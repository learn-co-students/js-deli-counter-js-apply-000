var katzDeliLine = []

function takeANumber (katzDeliLine, name) {
  var newLinePlace = katzDeliLine.length + 1
  katzDeliLine.push(name)
  var numberTaken = "Welcome, " + name +". " + "You are number " + newLinePlace + " in line."
  return numberTaken
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstinLine = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + firstinLine + "."
  } else return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var lineString = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineString += i + 1
      lineString += ". "
      lineString += katzDeliLine[i]
      if (i < katzDeliLine.length - 1) {
        lineString += ", "
      }
    }
  } else lineString = "The line is currently empty."
  return lineString
}