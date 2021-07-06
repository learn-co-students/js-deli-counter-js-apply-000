function takeANumber(katzDeliLine, newName){
  if (katzDeliLine.length === 0){
    katzDeliLine[0] = newName
    return ("Welcome, " + newName + ". You are number 1 in line.")
  }
  else if (katzDeliLine.length > 0) {
    var i = 0
    for (; i < katzDeliLine.length; i++){
    }
    katzDeliLine.push(newName)
    var num = i + 1
    return ("Welcome, " + newName + ". You are number " + num + " in line.")
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else if (katzDeliLine.length > 0) {
    var string = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++){
      var num = i + 1
      string = string + num + ". " + katzDeliLine[i]
      if ((i+1) < katzDeliLine.length){
        string = string + ", "
      }
    }
    return string
  }
}
