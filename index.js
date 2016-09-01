var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty."
  } else {
    var output = "The line is currently: "

    for(var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length - 1){
        output += (i+1) + ". " + katzDeliLine[i]
      } else {
        output += (i+1) + ". " + katzDeliLine[i] + ", "
      }
    }
    return output
  }
}
