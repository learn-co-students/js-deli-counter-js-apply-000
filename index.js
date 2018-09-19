let katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ` + (katzDeliLine.indexOf(newName)+1) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let firstName = katzDeliLine.shift();
  return "Currently serving " + firstName + "."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  let messageToLine = "The line is currently: ";
  for (let i = 0; i < katzDeliLine.length - 1; ++i) {
    let curPerson = katzDeliLine[i];
    let placeInLine = katzDeliLine.indexOf(curPerson) + 1;
    let personAndPlace = placeInLine + ". " + curPerson;
    messageToLine += personAndPlace + ", ";
  }
  for (let j = katzDeliLine.length - 1; j < katzDeliLine.length; ++j) {
    let lastPerson = katzDeliLine[j];
    let lastPlace = katzDeliLine.indexOf(lastPerson) + 1;
    let lastAndPlace = lastPlace + ". " + lastPerson;
    messageToLine += lastAndPlace;
  }
  
  return messageToLine;
}