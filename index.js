function takeANumber(katzDeliLine, newGuy) {
  katzDeliLine.push(newGuy)

  return "Welcome, " + newGuy + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){

    var serving = katzDeliLine.shift()
    return "Currently serving " + serving + "."

  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  else {
    var i;
    var returnStr = "The line is currently: "
    for(i=0; i < katzDeliLine.length; i++){
      returnStr = returnStr + (i+1).toString() + '. ' +  katzDeliLine[i] + ', '
    }
    return returnStr.substring(0, returnStr.length -2)
  }
}
