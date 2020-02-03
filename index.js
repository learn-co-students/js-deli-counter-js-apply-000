function takeANumber(linePos, personName) {
  
  linePos.push(personName);
  
  return `Welcome, ${personName}. You are number ${linePos.length} in line.`;
  
}

function nowServing(katzDeliLine) 
{
  if (katzDeliLine.length === 0) 
  {
    return "There is nobody waiting to be served!";
  } 
  else 
  {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  
  const LinePosAndName = [];
  
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    LinePosAndName.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
  
  return `The line is currently: ${LinePosAndName.join(', ')}`;
  
}