function takeANumber(currentLine, newPerson) {
  var newPersonNumber = currentLine.length + 1;
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${newPersonNumber} in line.`;
  
}

function nowServing (katzDeLine){
  if (katzDeLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var beingServed = katzDeLine[0]
    katzDeLine.splice(0,1)
    return `Currently serving ${beingServed}.`
  }
}

function currentLine (katzDeLine){
  if (katzDeLine.length === 0) {
    return "The line is currently empty."
  } else {
  var newLine = []
   for (var i = 0; i < katzDeLine.length; i++) {
      newLine.push(` ${i+1}. ${katzDeLine[i]}`)
    }
    return `The line is currently:${newLine}`
  }
}