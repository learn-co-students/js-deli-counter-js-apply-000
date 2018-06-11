var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  let queueLength = katzDeliLine.length;
  
  return `Welcome, ${newPerson}. You are number ${queueLength} in line.`;
}

function nowServing(line) {
  if(line.length > 0) {
    let currentPerson = line[0];
    line.shift();
    return `Currently serving ${currentPerson}.`;
  }
  else if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.';
  }
  
  let accumulatorString = 'The line is currently: ';
  
  for(let i = 0; i < line.length; i++) {
    if(i === line.length - 1) {
      accumulatorString = accumulatorString + `${i + 1}. ${line[i]}`;
    }
    else if (i < line.length) {
      accumulatorString = accumulatorString + `${i + 1}. ${line[i]}, `;
    }
  }
  
  return accumulatorString;
}