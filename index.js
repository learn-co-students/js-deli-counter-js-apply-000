function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;  
}

function nowServing(currentLine) {
  if(currentLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  return `Currently serving ${currentLine.shift()}.`;
}

function currentLine(line) {
  if(line.length === 0) {
    return `The line is currently empty.`;
  }
  
  var people = [];
  
  for(var i = 0; i < line.length; i++) {
    people.push(`${i+1}. ${line[i]}`);    
  }
  return `The line is currently: ${people.join(', ')}`;  
}