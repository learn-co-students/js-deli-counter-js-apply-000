function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var place = katzDeliLine.indexOf(name)
  return "Welcome, " + name + ". You are number " + (place + 1) + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var upNext = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  return "Currently serving " + upNext + "."
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  var lineString = "The line is currently:"
  for(var i = 0; i < line.length; i++){
      if(i===0){
        lineString = lineString + " " + (i+1) + ". " + line[i]
      }
      if(i>0){
        lineString = lineString + ", " + (i+1) + ". " + line[i]
      }
  }
  return lineString
}
