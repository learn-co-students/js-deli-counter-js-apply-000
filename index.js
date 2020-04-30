function takeANumber(currLine, newCustomer) {
  currLine.push(newCustomer);
  return 'Welcome, ' + newCustomer + '. You are number '
    + (currLine.indexOf(newCustomer)+1) + ' in line.';
}

function nowServing(currLine) {
  if (currLine.length === 0)
    return 'There is nobody waiting to be served!';
  else
    return 'Currently serving ' + currLine.shift() +'.';
}

function currentLine(currLine) {
  if (currLine.length === 0)
    return 'The line is currently empty.';
    
  var line = 'The line is currently: ';
  for (let i = 1; i <= currLine.length; i++) {
    line += i + '. ' + currLine[i-1];
    if (i < currLine.length)
      line += ', ';
  }
  return line;
}