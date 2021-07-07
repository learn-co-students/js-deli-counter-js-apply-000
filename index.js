function takeANumber(line, newPerson) {
  for (var i = 0; i < newPerson.length; i++) {
    line.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
  }
}

function nowServing(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var currentLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    currentLine.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently:${currentLine}`;
}