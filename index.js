function takeANumber (katzDeliLine, newPerson) {
  
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.push(newPerson)} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var line = "";
    
    for (var i=0; i < katzDeliLine.length-1; i++) {
      line += `${i+1}. ${katzDeliLine[i]}, `
    }
    line += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return `The line is currently: ${line}`;
  }
  
}