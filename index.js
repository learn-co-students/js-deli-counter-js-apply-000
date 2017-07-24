function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer)
  var position = katzDeliLine.length
  if (position > 6){
    return "Welcome, " + newCustomer + ". You are number 6 in line."
  }
  return "Welcome, " + newCustomer + ". You are number " + position.toString() + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  var serveNow = katzDeliLine.shift()
  return "Currently serving " + serveNow + "."
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  var i
  var result = "The line is currently: " + "1. " + katzDeliLine[0]
  for (i = 1; i < katzDeliLine.length; i++){
    var num = i + 1
    result = result + ", " + num.toString() + ". " + katzDeliLine[i]

  }
  return result
}
