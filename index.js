function takeANumber(currLinePpl, newPerson) {
  if (currLinePpl.length === 0) {
    currLinePpl.push(newPerson);
    
    return `Welcome, ${newPerson}. You are number 1 in line.`;
    
  } else if (currLinePpl.length > 0) {
    currLinePpl.push(newPerson);
    
    return `Welcome, ${newPerson}. You are number ${currLinePpl.indexOf(newPerson) + 1} in line.`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
    
  } else if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(currDeliLine) {
   if (currDeliLine.length === 0) {
    return 'The line is currently empty.';
    
  } else if (currDeliLine.length > 0) {
    let pplInLine = '';
    
    for (let i = 0; i < currDeliLine.length; i++) {
      if (i === currDeliLine.length - 1) {
        pplInLine += `${i + 1}. ${currDeliLine[i]}`;
        
      } else {
        pplInLine += `${i + 1}. ${currDeliLine[i]}, `
      }
    }
    return 'The line is currently: ' + pplInLine;
  }
}