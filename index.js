function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (!currentLine.length) {
    return 'There is nobody waiting to be served!'
  }
  let serveNow = currentLine[0];
  currentLine.shift();
  return `Currently serving ${serveNow}.`
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.'
  }

  let returnStr = 'The line is currently: ';

  line.forEach( function(person, i){
    returnStr += `${i + 1}. ${person}`;
    if (i != line.length - 1) {
      returnStr += ', ';
    }
  })
  return returnStr;
}
