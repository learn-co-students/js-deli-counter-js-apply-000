function takeANumber(deliLine, newPerson) {
  
  deliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  
  if (deliLine.length === 0)
    return "There is nobody waiting to be served!"
  else
    return `Currently serving ${deliLine.shift()}.`
}

function currentLine (deliLine) {
  
  var lineString = "The line is currently";
  var lineLen = deliLine.length;
  
  if (lineLen === 0)
    lineString += " empty.";
  else {
    lineString += ":";
    for (var i = 0; i < lineLen; i ++) {
      
      lineString += ` ${i + 1}. ${deliLine[i]}`;
      
      if (i != lineLen - 1)
        lineString += ",";
    }
  }
  
  return lineString;
}