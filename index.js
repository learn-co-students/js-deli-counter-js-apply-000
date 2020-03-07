function takeANumber(line, joined){
  line.push(joined)
  return "Welcome, " + joined + ". You are number " + line.length + " in line."
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    let serving = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    let arr = []
    for (let i = 0; i < line.length; i++){
      arr.push(i+1 + ". " + line[i])
    }
    return "The line is currently: " + arr.join(", ")
  }
}
