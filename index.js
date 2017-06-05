function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var toServe = katzDeliLine.shift()
    return "Currently serving " + toServe + "."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var string = ""
    for(var i = 1; i < katzDeliLine.length; i++){
      string+= i + ". " + katzDeliLine[i-1] + ", "
    }
    string += katzDeliLine.length + ". " + katzDeliLine[i-1]
    return "The line is currently: " + string
  }
}
