var katzDeliLine = [];

function takeANumber(currentLine, nextName) {
  currentLine.push(nextName)

    return `Welcome, ${nextName}. You are number ${currentLine.length} in line.`

  
}


function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty."
  }
  let positionAndName = [];
  for(let i = 0; i < line.length; i++){
  positionAndName.push(`${i + 1}. ${line[i]}`)
}
return `The line is currently: ${positionAndName.join(', ')}`
}