
//add new person to line
function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

//return first person in line as currently serving
function nowServing(currentLine) {
  if (currentLine.length != 0) {
    
    return `Currently serving ${currentLine.splice(0, 1)}.`;
  }
  else {
    
    return 'There is nobody waiting to be served!';
  }
}

//convert current line to string
function currentLine(currentLine) {
  let inLine = [];
  if (currentLine.length === 0) {
    
    return 'The line is currently empty.';
  }
  else {
    for (let i = 0; i < currentLine.length; i++) {
      inLine.push(`${i + 1}. ${currentLine[i]}`);
    }
  }
  
  return `The line is currently: ${inLine.join(", ")}`;
}