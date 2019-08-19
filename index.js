


function takeANumber(deliLine, name) {
  
  var msg = `Welcome, ${name}. You are number ${deliLine.length+1} in line.`
  
  deliLine.push(name)
  
  return msg
}


function nowServing(deliLine) {
  
  var nextUp
  
  if (deliLine.length > 0) {
    nextUp = `Currently serving ${deliLine.shift()}.`
  } else {
    nextUp = "There is nobody waiting to be served!"
  }
  
  return nextUp
  
}


function currentLine(deliLine) {
  var line
  
  if (deliLine.length > 0) {
    line = "The line is currently:"
    
    for (var i=0; i < deliLine.length; i++) {
      line += ` ${i+1}. ${deliLine[i]},`
    }
    line = line.slice(0, -1)
    
  }else {
    line = "The line is currently empty."
  }
  
  return line
}

