var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+katzDeliLine.shift()+"."
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length
  if (lineLength === 0) {
    return "The line is currently empty."
  }
  var outputString = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length - 1; i++) {
    outputString += i+1+". "+katzDeliLine[i]+", "
  }
  outputString += i+1+". "+katzDeliLine[i]
  return outputString
}