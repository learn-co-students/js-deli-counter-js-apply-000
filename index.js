function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var position = katzDeliLine.length;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  var personServed;
  if (katzDeliLine.length < 1) {
    personServed = "There is nobody waiting to be served!";
  }
  else {
    personServed = `Currently serving ${katzDeliLine[0]}.`;
  }
  katzDeliLine.shift();
  return personServed;
}

function currentLine(katzDeliLine) {
  var lineState;
  var personsInLine = [];
  if (katzDeliLine.length < 1) {
    lineState = "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      personsInLine.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    lineState = `The line is currently: ${personsInLine.join(', ')}`;
  }
  return lineState;
}
