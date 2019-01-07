function takeANumber(katzDeliLine, newName) {

  katzDeliLine.push(newName)
  return  "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."

}

function nowServing(katzDeliLine) {
  var nowServing = katzDeliLine[0]
  katzDeliLine.shift()

  if(nowServing)
    return "Currently serving " + nowServing + "."
    
  else
    return "There is nobody waiting to be served!"

}

function currentLine(katzDeliLine) {
  var line = "The line is currently empty."
  if(katzDeliLine[0]){
    line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += (i+1) + ". " + katzDeliLine[i]
      if (i < katzDeliLine.length-1) {
        line += ", "
      }
    }
  }

  return line

}
