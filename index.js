function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  var linePosition = currentLine.length;
  return `Welcome, ${newCustomer}. You are number ${linePosition} in line.`
}

function nowServing(katzDeliLine) {
  var nextClient = katzDeliLine[0];
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift();
    return `Currently serving ${nextClient}.`;
  }
}

var line = [];

function currentLine(lineOfPeople) {
  var i = 0;
  while (i < lineOfPeople.length) {
    line.push(` ${i + 1}. ${lineOfPeople[i]}`);
    i++;
  }
  
  if (lineOfPeople.length === 0) {
    return "The line is currently empty.";
  } else {
    return `The line is currently:${line}`;
  }
}