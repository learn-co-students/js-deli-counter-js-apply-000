function takeANumber(inLine, newPerson) {
  let peopleAhead = inLine.length + 1;
  inLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${peopleAhead} in line.`;
}

function nowServing(inLine) {
  if (inLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    let nowServing = inLine[0];
    inLine.shift();
    return `Currently serving ${nowServing}.`;
  }
}

function currentLine(inLine) {
  if (inLine.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    let whoIsInLine = [];
    inLine.forEach(function(waiting, i) {
      whoIsInLine.push(` ${i+1}. ${waiting}`);
    });
    let peopleInLine = whoIsInLine.toString();
    return `The line is currently:${peopleInLine}`;
  }
}