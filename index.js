function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var number = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var first = line[0]
    line.shift()
    return "Currently serving " + first + "."
  }
}

function currentLine(katzDeliLine){
  var string  = "The line is currently: "
  if (katzDeliLine == 0){
    return "The line is currently empty."
  }
  else {
    var i = 0
    while (i < katzDeliLine.length -1){
      string = string + (i+1) +". " + katzDeliLine[i] +", "
      i++
    }
    string = string + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length-1]
  }
  return string
}
