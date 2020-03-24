let ticketNumber = 0; 
ticketNumber++;

function ticketWheel(ticketNumber) {
  
 return `Welcome your ticket number is ${ticketNumber}`;
}

function takeANumber(katzDeliLine, newPerson) {
  
  katzDeliLine.push(newPerson);
  
  const currentPosition  = `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
  
  return currentPosition;
}

function nowServing(katzDeliLine) {
 
 if (katzDeliLine.length === 0) {
  return 'There is nobody waiting to be served!';
 } 
 
return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  
  const positionAndName = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
      
   positionAndName.push(`${i + 1}. ${katzDeliLine[i]}`);
}
return `The line is currently: ${positionAndName.join(', ')}`;
}
