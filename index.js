function takeANumber(currentLine, name) {
    currentLine.push(name)
    return(`Welcome, ${name}. You are number ` + currentLine.length + ' in line.')
}

function nowServing(katzDeliLine) {
  var nextUp = katzDeliLine.shift()
  if(katzDeliLine.length === 0) {
      return('There is nobody waiting to be served!')
  }
  else return('Currently serving ' + nextUp + '.')
}
  
function currentLine(line) {
  if (line.length === 0)  {
     return ('The line is currently empty.') 
  } else {
    var finalString = ''
    for (let i = 0; i < line.length; i++) {
     var placeInLine = i + 1 + '. '
     var fullLine = placeInLine + line[i] + ', '
     finalString = finalString + fullLine 
    }
     return ('The line is currently: ' + finalString.slice(0, -2))
  }
}