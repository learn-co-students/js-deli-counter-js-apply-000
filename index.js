function takeANumber(deliLine, newName) {
  if (deliLine.length === 0) {
    deliLine.push(newName)
    return `Welcome, ${deliLine[0]}. You are number ${deliLine.length} in line.`
  } else {
    deliLine.push(newName)
    return `Welcome, ${deliLine[deliLine.length-1]}. You are number ${deliLine.length} in line.`
  } 
}

function nowServing(deliLine) {  
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currServing = `Currently serving ${deliLine[0]}.`
    deliLine.shift()
    return currServing
  }
}

function currentLine(deliLine) {
  var currLine = "The line is currently: "

  if (deliLine.length === 0) { 
    return "The line is currently empty."
  } else {
    for (var i = deliLine.length; i > 0; i--) {
      currLine += `${deliLine.length-i+1}. ${deliLine[deliLine.length-i]}`
      if (i !== 1) {
        currLine += ", " 
      }
    }
  }
  return currLine
}
