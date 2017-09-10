function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  var line = "The line is currently: "
  for(var i=0; i < katzDeliLine.length; i++) {
    var place = katzDeliLine.indexOf(katzDeliLine[i]) + 1
    line += place + ". " + katzDeliLine[i]
    if(i+1 < katzDeliLine.length) {
      line += ", "
    }
  }
  return line
}
