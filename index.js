

function takeANumber(peopleInLine, newPerson) {
  const position = peopleInLine.length + 1;
  const welcome = `Welcome, ${newPerson}. You are number ${position} in line.`;
  peopleInLine.push(newPerson);
  return welcome;
  
 }

function nowServing(peopleInLine) {
  if (!peopleInLine || peopleInLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  const firstPerson = peopleInLine[0];
  peopleInLine.splice(0, 1);
  const message = `Currently serving ${firstPerson}.`;
  return message;
  
}

function currentLine(peopleInLine) {
  if (!peopleInLine || peopleInLine.length === 0) {
    return "The line is currently empty.";
  }
  const prefix = "The line is currently: ";
  const peopleInLineMessages = peopleInLine.map(function (person, index) {
    const lineNumber = index + 1;
    const messagePart = `${lineNumber}. ${person}`;
    return messagePart;
  });
  const joinedMessages = peopleInLineMessages.join(', ');
  return prefix + joinedMessages;
}
