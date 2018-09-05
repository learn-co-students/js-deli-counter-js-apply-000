var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  if (katzDeliLine.length === 0){
    katzDeliLine.push(name)
    return("Welcome, " + `${name}` + ". You are number " + `${katzDeliLine.length}` + " in line.")
  } else {
    katzDeliLine.push(name)
    return("Welcome, " + `${name}` + ". You are number " + `${katzDeliLine.length}` + " in line.")
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var now = katzDeliLine[0]
    katzDeliLine.shift()
    return ("Currently serving " + `${now}` + ".")
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else{
    var line = []
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === 0){
        line.push(`${i+1}` + ". " + katzDeliLine[i])
      } else{
        line.push(" " + `${i+1}` + ". " + katzDeliLine[i])
      }
    }
    return "The line is currently: " + `${line.toString()}`
  }
}