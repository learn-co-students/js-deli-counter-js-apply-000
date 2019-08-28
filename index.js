function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
}

function currentLine(KatzDeliLine) {
  if (KatzDeliLine.length == 0) {
    return "The line is currently empty."
  } else if (KatzDeliLine.length > 0) {
    var lineString = "The line is currently: "
    
    for (var i = 0; i < KatzDeliLine.length; i++) {
      lineString = lineString + (`${[i+1]}. ${KatzDeliLine[i]}, ` )
    }
    
    lineString = lineString.slice(0, -2)
    
    return lineString
  }
}